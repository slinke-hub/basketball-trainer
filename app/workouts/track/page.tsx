'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { CheckCircle, Circle, Timer } from 'lucide-react';

export default function TrackWorkoutPage() {
    const router = useRouter();
    const [activeTimer, setActiveTimer] = useState(0);

    const [exercises, setExercises] = useState([
        { id: 1, name: 'Bench Press', sets: 3, reps: 10, weight: 60, completed: false },
        { id: 2, name: 'Dumbbell Rows', sets: 3, reps: 12, weight: 20, completed: false },
        { id: 3, name: 'Shoulder Press', sets: 3, reps: 10, weight: 40, completed: false },
        { id: 4, name: 'Bicep Curls', sets: 3, reps: 15, weight: 15, completed: false },
        { id: 5, name: 'Tricep Dips', sets: 3, reps: 12, weight: 0, completed: false },
    ]);

    const toggleExercise = (id: number) => {
        setExercises(exercises.map(ex =>
            ex.id === id ? { ...ex, completed: !ex.completed } : ex
        ));
    };

    const completedCount = exercises.filter(ex => ex.completed).length;
    const progress = (completedCount / exercises.length) * 100;

    const handleFinish = () => {
        // Would save to Firestore here
        router.push('/workouts');
    };

    return (
        <div className="container py-6 animate-fadeIn">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">Upper Body Strength</h1>
                <p className="text-neutral-400">Track your sets and complete the workout</p>
            </div>

            {/* Progress Bar */}
            <Card hoverable={false} className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Progress</span>
                    <span className="text-primary-500 font-bold">{completedCount}/{exercises.length} exercises</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-3">
                    <div
                        className="gradient-orange h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </Card>

            {/* Exercise List */}
            <div className="space-y-3 mb-6">
                {exercises.map((exercise) => (
                    <Card
                        key={exercise.id}
                        onClick={() => toggleExercise(exercise.id)}
                        className={exercise.completed ? 'opacity-60 border-green-500' : ''}
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                {exercise.completed ? (
                                    <CheckCircle size={24} className="text-green-500" />
                                ) : (
                                    <Circle size={24} className="text-neutral-600" />
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold">{exercise.name}</h3>
                                <p className="text-sm text-neutral-400">
                                    {exercise.sets} sets × {exercise.reps} reps
                                    {exercise.weight > 0 && ` @ ${exercise.weight}kg`}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
                <Button variant="secondary" onClick={() => router.back()}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={handleFinish}
                    disabled={completedCount === 0}
                >
                    Finish Workout
                </Button>
            </div>
        </div>
    );
}
