'use client';

import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Dumbbell, PlayCircle, Clock, TrendingUp } from 'lucide-react';

export default function WorkoutsPage() {
    const router = useRouter();

    const workoutPrograms = [
        {
            id: 1,
            name: 'Upper Body Strength',
            category: 'strength',
            duration: 45,
            exercises: 8,
            difficulty: 'Intermediate',
            icon: Dumbbell,
            color: 'from-orange-600 to-orange-500',
        },
        {
            id: 2,
            name: 'Basketball Cardio',
            category: 'cardio',
            duration: 30,
            exercises: 6,
            difficulty: 'Beginner',
            icon: TrendingUp,
            color: 'from-red-600 to-red-500',
        },
        {
            id: 3,
            name: 'Core & Stability',
            category: 'strength',
            duration: 35,
            exercises: 10,
            difficulty: 'Advanced',
            icon: Dumbbell,
            color: 'from-blue-600 to-blue-500',
        },
        {
            id: 4,
            name: 'Shooting Skills',
            category: 'skills',
            duration: 40,
            exercises: 5,
            difficulty: 'Intermediate',
            icon: PlayCircle,
            color: 'from-purple-600 to-purple-500',
        },
    ];

    return (
        <div className="container py-6 animate-fadeIn">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">Workouts</h1>
                <p className="text-neutral-400">Choose a workout program and start training</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workoutPrograms.map((workout) => {
                    const Icon = workout.icon;
                    return (
                        <Card key={workout.id} onClick={() => router.push(`/workouts/track?id=${workout.id}`)}>
                            <div className="flex items-start gap-4">
                                <div className={`p-4 rounded-xl bg-gradient-to-br ${workout.color} flex-shrink-0`}>
                                    <Icon size={32} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg mb-1">{workout.name}</h3>
                                    <p className="text-sm text-neutral-400 mb-3 capitalize">{workout.category} • {workout.difficulty}</p>
                                    <div className="flex items-center gap-4 text-sm text-neutral-400">
                                        <div className="flex items-center gap-1">
                                            <Clock size={16} />
                                            <span>{workout.duration} min</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Dumbbell size={16} />
                                            <span>{workout.exercises} exercises</span>
                                        </div>
                                    </div>
                                    <Button variant="primary" size="sm" className="mt-4">
                                        Start Workout
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
