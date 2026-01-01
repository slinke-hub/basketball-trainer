<<<<<<< HEAD
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Moon, Sun, Bell, BellOff, ChevronRight } from 'lucide-react';

export default function SettingsPage() {
    const router = useRouter();
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [notifications, setNotifications] = useState(true);
    const [workoutReminders, setWorkoutReminders] = useState(true);
    const [mealReminders, setMealReminders] = useState(false);

    const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
        <button
            onClick={onChange}
            className={`relative w-12 h-6 rounded-full transition-colors ${checked ? 'bg-primary-500' : 'bg-neutral-700'
                }`}
        >
            <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${checked ? 'transform translate-x-6' : ''
                    }`}
            />
        </button>
    );

    return (
        <div className="container py-6 animate-fadeIn">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">Settings</h1>
                <p className="text-neutral-400">Customize your app experience</p>
            </div>

            {/* Appearance */}
            <Card hoverable={false} className="mb-4">
                <h3 className="font-bold mb-4">Appearance</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                        <div>
                            <div className="font-medium">Theme</div>
                            <div className="text-sm text-neutral-400">
                                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                            </div>
                        </div>
                    </div>
                    <ToggleSwitch
                        checked={theme === 'dark'}
                        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    />
                </div>
            </Card>

            {/* Notifications */}
            <Card hoverable={false} className="mb-4">
                <h3 className="font-bold mb-4">Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {notifications ? <Bell size={20} /> : <BellOff size={20} />}
                            <div>
                                <div className="font-medium">Push Notifications</div>
                                <div className="text-sm text-neutral-400">Receive app notifications</div>
                            </div>
                        </div>
                        <ToggleSwitch
                            checked={notifications}
                            onChange={() => setNotifications(!notifications)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">Workout Reminders</div>
                            <div className="text-sm text-neutral-400">Daily workout notifications</div>
                        </div>
                        <ToggleSwitch
                            checked={workoutReminders}
                            onChange={() => setWorkoutReminders(!workoutReminders)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">Meal Reminders</div>
                            <div className="text-sm text-neutral-400">Time to log your meals</div>
                        </div>
                        <ToggleSwitch
                            checked={mealReminders}
                            onChange={() => setMealReminders(!mealReminders)}
                        />
                    </div>
                </div>
            </Card>

            {/* Account */}
            <Card hoverable={false} className="mb-4">
                <h3 className="font-bold mb-4">Account</h3>
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800 transition-colors">
                        <span className="font-medium">Change Password</span>
                        <ChevronRight size={20} className="text-neutral-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800 transition-colors">
                        <span className="font-medium">Privacy Settings</span>
                        <ChevronRight size={20} className="text-neutral-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800 transition-colors">
                        <span className="font-medium">Data & Storage</span>
                        <ChevronRight size={20} className="text-neutral-400" />
                    </button>
                </div>
            </Card>

            {/* About */}
            <Card hoverable={false}>
                <div className="text-center py-2">
                    <p className="text-neutral-400 text-sm mb-1">Basketball Trainer</p>
                    <p className="text-neutral-500 text-xs">Version 1.0.0</p>
                </div>
            </Card>
        </div>
    );
}
=======
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Moon, Sun, Bell, BellOff, ChevronRight } from 'lucide-react';

export default function SettingsPage() {
    const router = useRouter();
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [notifications, setNotifications] = useState(true);
    const [workoutReminders, setWorkoutReminders] = useState(true);
    const [mealReminders, setMealReminders] = useState(false);

    const ToggleSwitch = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
        <button
            onClick={onChange}
            className={`relative w-12 h-6 rounded-full transition-colors ${checked ? 'bg-primary-500' : 'bg-neutral-700'
                }`}
        >
            <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${checked ? 'transform translate-x-6' : ''
                    }`}
            />
        </button>
    );

    return (
        <div className="container py-6 animate-fadeIn">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">Settings</h1>
                <p className="text-neutral-400">Customize your app experience</p>
            </div>

            {/* Appearance */}
            <Card hoverable={false} className="mb-4">
                <h3 className="font-bold mb-4">Appearance</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                        <div>
                            <div className="font-medium">Theme</div>
                            <div className="text-sm text-neutral-400">
                                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                            </div>
                        </div>
                    </div>
                    <ToggleSwitch
                        checked={theme === 'dark'}
                        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    />
                </div>
            </Card>

            {/* Notifications */}
            <Card hoverable={false} className="mb-4">
                <h3 className="font-bold mb-4">Notifications</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {notifications ? <Bell size={20} /> : <BellOff size={20} />}
                            <div>
                                <div className="font-medium">Push Notifications</div>
                                <div className="text-sm text-neutral-400">Receive app notifications</div>
                            </div>
                        </div>
                        <ToggleSwitch
                            checked={notifications}
                            onChange={() => setNotifications(!notifications)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">Workout Reminders</div>
                            <div className="text-sm text-neutral-400">Daily workout notifications</div>
                        </div>
                        <ToggleSwitch
                            checked={workoutReminders}
                            onChange={() => setWorkoutReminders(!workoutReminders)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="font-medium">Meal Reminders</div>
                            <div className="text-sm text-neutral-400">Time to log your meals</div>
                        </div>
                        <ToggleSwitch
                            checked={mealReminders}
                            onChange={() => setMealReminders(!mealReminders)}
                        />
                    </div>
                </div>
            </Card>

            {/* Account */}
            <Card hoverable={false} className="mb-4">
                <h3 className="font-bold mb-4">Account</h3>
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800 transition-colors">
                        <span className="font-medium">Change Password</span>
                        <ChevronRight size={20} className="text-neutral-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800 transition-colors">
                        <span className="font-medium">Privacy Settings</span>
                        <ChevronRight size={20} className="text-neutral-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800 transition-colors">
                        <span className="font-medium">Data & Storage</span>
                        <ChevronRight size={20} className="text-neutral-400" />
                    </button>
                </div>
            </Card>

            {/* About */}
            <Card hoverable={false}>
                <div className="text-center py-2">
                    <p className="text-neutral-400 text-sm mb-1">Basketball Trainer</p>
                    <p className="text-neutral-500 text-xs">Version 1.0.0</p>
                </div>
            </Card>
        </div>
    );
}
>>>>>>> e13a86e7f2e6373aec0671b0c6aa2f3e904bab34
