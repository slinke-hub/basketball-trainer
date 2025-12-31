'use client';

import Card from '@/components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Award } from 'lucide-react';

export default function ProgressPage() {
    const weightData = [
        { date: 'Jan 1', weight: 82 },
        { date: 'Jan 8', weight: 81.5 },
        { date: 'Jan 15', weight: 81 },
        { date: 'Jan 22', weight: 80.5 },
        { date: 'Jan 29', weight: 80 },
        { date: 'Feb 5', weight: 79.5 },
    ];

    const workoutData = [
        { week: 'Week 1', workouts: 3 },
        { week: 'Week 2', workouts: 4 },
        { week: 'Week 3', workouts: 5 },
        { week: 'Week 4', workouts: 4 },
    ];

    const personalRecords = [
        { exercise: 'Bench Press', weight: 80, unit: 'kg', date: '2025-01-20' },
        { exercise: 'Squat', weight: 120, unit: 'kg', date: '2025-01-18' },
        { exercise: '1 Mile Run', weight: 6, unit: 'min', date: '2025-01-15' },
    ];

    return (
        <div className="container py-6 animate-fadeIn">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">Progress Tracking</h1>
                <p className="text-neutral-400">Monitor your fitness journey</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <Card hoverable={false}>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-green-500 mb-1">
                            <TrendingDown size={20} />
                            <span className="text-2xl font-bold">-2.5kg</span>
                        </div>
                        <div className="text-sm text-neutral-400">Weight Lost</div>
                    </div>
                </Card>
                <Card hoverable={false}>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-primary-500 mb-1">
                            <TrendingUp size={20} />
                            <span className="text-2xl font-bold">16</span>
                        </div>
                        <div className="text-sm text-neutral-400">Workouts This Month</div>
                    </div>
                </Card>
                <Card hoverable={false}>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
                            <Award size={20} />
                            <span className="text-2xl font-bold">3</span>
                        </div>
                        <div className="text-sm text-neutral-400">Personal Records</div>
                    </div>
                </Card>
            </div>

            {/* Weight Progress Chart */}
            <Card hoverable={false} className="mb-6">
                <h3 className="font-bold mb-4">Weight Progress</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={weightData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                        <XAxis dataKey="date" stroke="#a1a1aa" />
                        <YAxis stroke="#a1a1aa" domain={[78, 83]} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#18181b',
                                border: '1px solid #3f3f46',
                                borderRadius: '8px',
                                color: '#fafafa'
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="weight"
                            stroke="#f97316"
                            strokeWidth={3}
                            dot={{ fill: '#f97316', r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Card>

            {/* Workout Frequency Chart */}
            <Card hoverable={false} className="mb-6">
                <h3 className="font-bold mb-4">Workout Frequency</h3>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={workoutData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
                        <XAxis dataKey="week" stroke="#a1a1aa" />
                        <YAxis stroke="#a1a1aa" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#18181b',
                                border: '1px solid #3f3f46',
                                borderRadius: '8px',
                                color: '#fafafa'
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="workouts"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            dot={{ fill: '#3b82f6', r: 5 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Card>

            {/* Personal Records */}
            <Card hoverable={false}>
                <h3 className="font-bold mb-4">Personal Records</h3>
                <div className="space-y-3">
                    {personalRecords.map((record, index) => (
                        <div key={index} className="flex items-center justify-between pb-3 border-b border-neutral-800 last:border-0 last:pb-0">
                            <div>
                                <div className="font-medium">{record.exercise}</div>
                                <div className="text-sm text-neutral-400">{record.date}</div>
                            </div>
                            <div className="text-xl font-bold text-primary-500">
                                {record.weight} {record.unit}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
