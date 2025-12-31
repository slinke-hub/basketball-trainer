'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, Dumbbell, Utensils, TrendingUp, User } from 'lucide-react';

export default function BottomNav() {
    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        { icon: Home, label: 'Home', path: '/', color: 'icon-blue' },
        { icon: Dumbbell, label: 'Workouts', path: '/workouts', color: 'icon-orange' },
        { icon: Utensils, label: 'Meals', path: '/meals', color: 'icon-green' },
        { icon: TrendingUp, label: 'Progress', path: '/progress', color: 'icon-purple' },
        { icon: User, label: 'Profile', path: '/profile', color: 'icon-cyan' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 glass border-t-2 border-neon-blue/30 z-50 animate-slideUp backdrop-blur-xl">
            <div className="neon-glow" style={{ boxShadow: '0 -4px 20px rgba(0, 217, 255, 0.2)' }}>
                <div className="grid grid-cols-5 h-16 max-w-lg mx-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                            <button
                                key={item.path}
                                onClick={() => router.push(item.path)}
                                className={`
                  flex flex-col items-center justify-center gap-1
                  transition-all duration-300 relative
                  ${isActive ? `${item.color} icon-glow` : 'text-neutral-400 hover:text-neutral-200'}
                `}
                            >
                                <Icon
                                    size={22}
                                    className={`transition-transform ${isActive ? 'scale-110' : 'hover:scale-105'}`}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />
                                <span className={`text-xs font-medium ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
                                {isActive && (
                                    <div
                                        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-b-full"
                                        style={{ background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))' }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
