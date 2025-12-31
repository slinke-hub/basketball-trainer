'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '@/lib/firebase.config';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signup: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for development when Firebase is unavailable
const mockUser = {
    uid: 'demo-user-123',
    email: 'demo@basketballtrainer.com',
    displayName: 'Demo User',
    photoURL: null,
} as User;

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [useMockAuth] = useState(!auth); // Use mock auth if Firebase is unavailable

    useEffect(() => {
        if (useMockAuth) {
            // For demo mode, automatically log in
            setTimeout(() => {
                setUser(mockUser);
                setLoading(false);
            }, 500);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [useMockAuth]);

    const signup = async (email: string, password: string) => {
        if (useMockAuth) {
            // Mock signup
            setUser({ ...mockUser, email });
            return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
    };

    const login = async (email: string, password: string) => {
        if (useMockAuth) {
            // Mock login
            setUser({ ...mockUser, email });
            return;
        }
        await signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        if (useMockAuth) {
            setUser(null);
            return;
        }
        await signOut(auth);
    };

    const value = {
        user,
        loading,
        signup,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
