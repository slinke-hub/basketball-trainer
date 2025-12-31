'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { LogIn, Sparkles } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            router.push('/');
        } catch (err: any) {
            setError(err.message || 'Failed to login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
            <div className="w-full max-w-md animate-fadeIn">
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <h1 className="text-5xl md:text-6xl font-bold gradient-text-neon neon-text">
                            🏀
                        </h1>
                        <Sparkles className="icon-cyan icon-glow animate-pulse" size={32} />
                    </div>
                    <h1 className="text-4xl font-bold gradient-text-neon mb-2 neon-text">
                        Basketball Trainer
                    </h1>
                    <p className="text-neutral-400 text-lg">Sign in to continue your training journey</p>
                </div>

                <Card hoverable={false} className="neon-border-animated">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            label="Email"
                            type="email"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                        />

                        <Input
                            label="Password"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />

                        {error && (
                            <div className="p-3 bg-error/10 border-2 border-error rounded-lg text-error text-sm animate-fadeIn">
                                {error}
                            </div>
                        )}

                        <Button type="submit" variant="primary" fullWidth loading={loading} size="lg" className="mt-6">
                            {!loading && <LogIn size={20} />}
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-neutral-400 text-sm">
                            Don't have an account?{' '}
                            <Link href="/signup" className="neon-text font-semibold hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
