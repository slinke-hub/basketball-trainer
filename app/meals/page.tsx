'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Plus, Utensils, Trash2 } from 'lucide-react';

export default function MealsPage() {
    const [meals, setMeals] = useState([
        {
            id: 1,
            name: 'Oatmeal with Berries',
            category: 'breakfast',
            calories: 350,
            protein: 12,
            carbs: 58,
            fats: 8,
        },
        {
            id: 2,
            name: 'Grilled Chicken Salad',
            category: 'lunch',
            calories: 420,
            protein: 45,
            carbs: 25,
            fats: 15,
        },
        {
            id: 3,
            name: 'Protein Shake',
            category: 'snack',
            calories: 180,
            protein: 25,
            carbs: 12,
            fats: 3,
        },
        {
            id: 4,
            name: 'Salmon with Vegetables',
            category: 'dinner',
            calories: 550,
            protein: 48,
            carbs: 35,
            fats: 22,
        },
    ]);

    const categoryColors = {
        breakfast: 'from-yellow-600 to-yellow-500',
        lunch: 'from-green-600 to-green-500',
        dinner: 'from-blue-600 to-blue-500',
        snack: 'from-purple-600 to-purple-500',
    };

    const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
    const totalProtein = meals.reduce((sum, meal) => sum + meal.protein, 0);

    const deleteMeal = (id: number) => {
        setMeals(meals.filter(meal => meal.id !== id));
    };

    return (
        <div className="container py-6 animate-fadeIn max-w-4xl">
            <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-neon neon-text">Meal Planner</h1>
                <p className="text-neutral-400 text-lg">Track your daily nutrition</p>
            </div>

            {/* Daily Summary */}
            <Card hoverable={false} className="mb-6 neon-border-animated">
                <h3 className="font-bold mb-4 text-xl">Today's Summary</h3>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="text-center md:text-left">
                        <div className="text-4xl md:text-5xl font-bold gradient-text-neon">{totalCalories}</div>
                        <div className="text-sm text-neutral-400 mt-1">Total Calories</div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-4xl md:text-5xl font-bold icon-green">{totalProtein}g</div>
                        <div className="text-sm text-neutral-400 mt-1">Protein</div>
                    </div>
                </div>
            </Card>

            {/* Meals List */}
            <div className="space-y-3 md:space-y-4 mb-6">
                {meals.map((meal) => (
                    <Card key={meal.id} hoverable={false} className="neon-border">
                        <div className="flex items-start gap-3 md:gap-4">
                            <div className={`p-3 md:p-4 rounded-lg bg-gradient-to-br ${categoryColors[meal.category as keyof typeof categoryColors]} flex-shrink-0`}>
                                <Utensils size={24} className="text-white icon-glow" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <div className="flex-1">
                                        <h4 className="font-bold text-lg md:text-xl">{meal.name}</h4>
                                        <p className="text-sm text-neutral-400 capitalize">{meal.category}</p>
                                    </div>
                                    <button
                                        onClick={() => deleteMeal(meal.id)}
                                        className="p-2 rounded-lg bg-error/10 border border-error/30 text-error hover:bg-error/20 hover:border-error hover:shadow-[0_0_10px_rgba(239,68,68,0.3)] transition-all duration-200 flex-shrink-0"
                                        aria-label="Delete meal"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-4 gap-2 text-xs md:text-sm text-neutral-400">
                                    <div className="text-center">
                                        <div className="font-bold text-foreground text-base md:text-lg">{meal.calories}</div>
                                        <div className="truncate">Calories</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-bold text-foreground text-base md:text-lg">{meal.protein}g</div>
                                        <div className="truncate">Protein</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-bold text-foreground text-base md:text-lg">{meal.carbs}g</div>
                                        <div className="truncate">Carbs</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="font-bold text-foreground text-base md:text-lg">{meal.fats}g</div>
                                        <div className="truncate">Fats</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Add Meal Button */}
            <Button variant="primary" fullWidth size="lg">
                <Plus size={20} />
                Add Meal
            </Button>
        </div>
    );
}
