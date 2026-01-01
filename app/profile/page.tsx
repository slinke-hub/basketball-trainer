<<<<<<< HEAD
'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { User, Camera, Mail, Settings, LogOut, Edit } from 'lucide-react';

export default function ProfilePage() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/login');
    };

    const profileData = {
        displayName: user?.email?.split('@')[0] || 'Player',
        email: user?.email || '',
        height: 185,
        weight: 80,
        position: 'Point Guard',
        team: 'Lakers',
    };

    return (
        <div className="container py-6 animate-fadeIn max-w-3xl">
            <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-neon neon-text">Profile</h1>
                <p className="text-neutral-400 text-lg">Manage your account and basketball stats</p>
            </div>

            {/* Profile Header */}
            <Card hoverable={false} className="mb-6 neon-border-animated">
                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-4xl md:text-5xl font-bold neon-glow">
                            {profileData.displayName[0].toUpperCase()}
                        </div>
                        <button className="absolute bottom-0 right-0 w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center border-2 border-neon-blue hover:bg-neutral-700 hover:shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all duration-200">
                            <Camera size={18} className="icon-blue" />
                        </button>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold capitalize">{profileData.displayName}</h2>
                    <p className="text-neutral-400 flex items-center gap-2 mt-2">
                        <Mail size={16} className="icon-cyan" />
                        {profileData.email}
                    </p>
                </div>
            </Card>

            {/* Basketball Stats */}
            <Card hoverable={false} className="mb-6 neon-border">
                <h3 className="font-bold mb-4 text-xl">Basketball Stats</h3>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="text-center md:text-left">
                        <div className="text-sm text-neutral-400 mb-1">Height</div>
                        <div className="font-bold text-xl md:text-2xl gradient-text-neon">{profileData.height} cm</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-sm text-neutral-400 mb-1">Weight</div>
                        <div className="font-bold text-xl md:text-2xl gradient-text-neon">{profileData.weight} kg</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-sm text-neutral-400 mb-1">Position</div>
                        <div className="font-bold text-xl md:text-2xl gradient-text-neon">{profileData.position}</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-sm text-neutral-400 mb-1">Team</div>
                        <div className="font-bold text-xl md:text-2xl gradient-text-neon">{profileData.team}</div>
                    </div>
                </div>
                <Button variant="secondary" fullWidth size="lg" className="mt-6">
                    <Edit size={20} />
                    Edit Profile
                </Button>
            </Card>

            {/* Account Actions */}
            <Card hoverable={false} className="neon-border">
                <h3 className="font-bold mb-4 text-xl">Account</h3>
                <div className="space-y-3">
                    <Button
                        variant="secondary"
                        fullWidth
                        size="lg"
                        onClick={() => router.push('/settings')}
                    >
                        <Settings size={20} />
                        Settings
                    </Button>
                    <Button
                        variant="danger"
                        fullWidth
                        size="lg"
                        onClick={handleLogout}
                    >
                        <LogOut size={20} />
                        Sign Out
                    </Button>
                </div>
            </Card>
        </div>
    );
}
=======
'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { User, Camera, Mail, Settings, LogOut, Edit } from 'lucide-react';

export default function ProfilePage() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/login');
    };

    const profileData = {
        displayName: user?.email?.split('@')[0] || 'Player',
        email: user?.email || '',
        height: 185,
        weight: 80,
        position: 'Point Guard',
        team: 'Lakers',
    };

    return (
        <div className="container py-6 animate-fadeIn max-w-3xl">
            <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-neon neon-text">Profile</h1>
                <p className="text-neutral-400 text-lg">Manage your account and basketball stats</p>
            </div>

            {/* Profile Header */}
            <Card hoverable={false} className="mb-6 neon-border-animated">
                <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-4xl md:text-5xl font-bold neon-glow">
                            {profileData.displayName[0].toUpperCase()}
                        </div>
                        <button className="absolute bottom-0 right-0 w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center border-2 border-neon-blue hover:bg-neutral-700 hover:shadow-[0_0_15px_rgba(0,217,255,0.5)] transition-all duration-200">
                            <Camera size={18} className="icon-blue" />
                        </button>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold capitalize">{profileData.displayName}</h2>
                    <p className="text-neutral-400 flex items-center gap-2 mt-2">
                        <Mail size={16} className="icon-cyan" />
                        {profileData.email}
                    </p>
                </div>
            </Card>

            {/* Basketball Stats */}
            <Card hoverable={false} className="mb-6 neon-border">
                <h3 className="font-bold mb-4 text-xl">Basketball Stats</h3>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="text-center md:text-left">
                        <div className="text-sm text-neutral-400 mb-1">Height</div>
                        <div className="font-bold text-xl md:text-2xl gradient-text-neon">{profileData.height} cm</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-sm text-neutral-400 mb-1">Weight</div>
                        <div className="font-bold text-xl md:text-2xl gradient-text-neon">{profileData.weight} kg</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-sm text-neutral-400 mb-1">Position</div>
                        <div className="font-bold text-xl md:text-2xl gradient-text-neon">{profileData.position}</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-sm text-neutral-400 mb-1">Team</div>
                        <div className="font-bold text-xl md:text-2xl gradient-text-neon">{profileData.team}</div>
                    </div>
                </div>
                <Button variant="secondary" fullWidth size="lg" className="mt-6">
                    <Edit size={20} />
                    Edit Profile
                </Button>
            </Card>

            {/* Account Actions */}
            <Card hoverable={false} className="neon-border">
                <h3 className="font-bold mb-4 text-xl">Account</h3>
                <div className="space-y-3">
                    <Button
                        variant="secondary"
                        fullWidth
                        size="lg"
                        onClick={() => router.push('/settings')}
                    >
                        <Settings size={20} />
                        Settings
                    </Button>
                    <Button
                        variant="danger"
                        fullWidth
                        size="lg"
                        onClick={handleLogout}
                    >
                        <LogOut size={20} />
                        Sign Out
                    </Button>
                </div>
            </Card>
        </div>
    );
}
>>>>>>> e13a86e7f2e6373aec0671b0c6aa2f3e904bab34
