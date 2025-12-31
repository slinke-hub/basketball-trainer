// User Profile Type
export interface UserProfile {
    uid: string;
    email: string;
    displayName: string;
    photoURL?: string;
    height?: number; // in cm
    weight?: number; // in kg
    position?: string;
    team?: string;
    age?: number;
    createdAt: Date;
    updatedAt: Date;
}

// Workout Types
export interface Exercise {
    id: string;
    name: string;
    sets: number;
    reps: number;
    weight?: number; // in kg
    duration?: number; // in seconds for timed exercises
    completed: boolean;
}

export interface Workout {
    id: string;
    userId: string;
    name: string;
    category: 'strength' | 'cardio' | 'skills' | 'flexibility';
    exercises: Exercise[];
    duration: number; // in minutes
    completed: boolean;
    completedAt?: Date;
    createdAt: Date;
}

// Meal Types
export interface Meal {
    id: string;
    userId: string;
    name: string;
    category: 'breakfast' | 'lunch' | 'dinner' | 'snack';
    calories: number;
    protein: number; // in grams
    carbs: number; // in grams
    fats: number; // in grams
    date: Date;
    createdAt: Date;
}

// Progress Types
export interface ProgressEntry {
    id: string;
    userId: string;
    date: Date;
    weight?: number; // in kg
    bodyFat?: number; // percentage
    chest?: number; // in cm
    waist?: number; // in cm
    hips?: number; // in cm
    arms?: number; // in cm
    legs?: number; // in cm
    notes?: string;
    createdAt: Date;
}

// BMI Calculation Type
export interface BMIResult {
    bmi: number;
    category: 'underweight' | 'normal' | 'overweight' | 'obese';
    idealWeightRange: {
        min: number;
        max: number;
    };
}

// Settings Type
export interface UserSettings {
    userId: string;
    theme: 'light' | 'dark';
    notifications: boolean;
    workoutReminders: boolean;
    mealReminders: boolean;
    updatedAt: Date;
}
