<<<<<<< HEAD
'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Calculator, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function BMIPage() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState<number | null>(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        const heightInMeters = parseFloat(height) / 100;
        const weightInKg = parseFloat(weight);

        if (heightInMeters > 0 && weightInKg > 0) {
            const bmiValue = weightInKg / (heightInMeters * heightInMeters);
            setBMI(parseFloat(bmiValue.toFixed(1)));

            if (bmiValue < 18.5) {
                setCategory('Underweight');
            } else if (bmiValue < 25) {
                setCategory('Normal');
            } else if (bmiValue < 30) {
                setCategory('Overweight');
            } else {
                setCategory('Obese');
            }
        }
    };

    const getCategoryColor = () => {
        switch (category) {
            case 'Underweight':
                return 'text-blue-500';
            case 'Normal':
                return 'text-green-500';
            case 'Overweight':
                return 'text-yellow-500';
            case 'Obese':
                return 'text-red-500';
            default:
                return 'text-neutral-400';
        }
    };

    const getCategoryIcon = () => {
        switch (category) {
            case 'Underweight':
                return <TrendingDown size={32} />;
            case 'Normal':
                return <Minus size={32} />;
            case 'Overweight':
            case 'Obese':
                return <TrendingUp size={32} />;
            default:
                return <Calculator size={32} />;
        }
    };

    return (
        <div className="container py-6 animate-fadeIn">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">BMI Calculator</h1>
                <p className="text-neutral-400">Calculate your Body Mass Index</p>
            </div>

            <Card hoverable={false} className="mb-6">
                <div className="space-y-4">
                    <Input
                        label="Height (cm)"
                        type="number"
                        fullWidth
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="180"
                    />

                    <Input
                        label="Weight (kg)"
                        type="number"
                        fullWidth
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="75"
                    />

                    <Button variant="primary" fullWidth onClick={calculateBMI}>
                        <Calculator size={20} />
                        Calculate BMI
                    </Button>
                </div>
            </Card>

            {bmi !== null && (
                <Card hoverable={false} className="animate-fadeIn">
                    <div className="text-center">
                        <div className={`mb-4 ${getCategoryColor()}`}>
                            {getCategoryIcon()}
                        </div>
                        <div className="text-5xl font-bold mb-2">{bmi}</div>
                        <div className={`text-2xl font-semibold mb-6 ${getCategoryColor()}`}>
                            {category}
                        </div>

                        <div className="bg-neutral-800 rounded-lg p-4 text-left">
                            <h4 className="font-bold mb-3">BMI Categories</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Underweight</span>
                                    <span className="text-blue-500">{'< 18.5'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Normal weight</span>
                                    <span className="text-green-500">18.5 - 24.9</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Overweight</span>
                                    <span className="text-yellow-500">25 - 29.9</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Obese</span>
                                    <span className="text-red-500">≥ 30</span>
                                </div>
                            </div>
                        </div>

                        {height && weight && (
                            <div className="mt-4 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg text-sm">
                                <p className="text-neutral-300">
                                    Based on your height ({height}cm), a healthy weight range is approximately{' '}
                                    <span className="font-bold text-primary-500">
                                        {Math.round((18.5 * Math.pow(parseFloat(height) / 100, 2)))} - {Math.round((24.9 * Math.pow(parseFloat(height) / 100, 2)))} kg
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>
                </Card>
            )}
        </div>
    );
}
=======
'use client';

import { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Calculator, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function BMIPage() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState<number | null>(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        const heightInMeters = parseFloat(height) / 100;
        const weightInKg = parseFloat(weight);

        if (heightInMeters > 0 && weightInKg > 0) {
            const bmiValue = weightInKg / (heightInMeters * heightInMeters);
            setBMI(parseFloat(bmiValue.toFixed(1)));

            if (bmiValue < 18.5) {
                setCategory('Underweight');
            } else if (bmiValue < 25) {
                setCategory('Normal');
            } else if (bmiValue < 30) {
                setCategory('Overweight');
            } else {
                setCategory('Obese');
            }
        }
    };

    const getCategoryColor = () => {
        switch (category) {
            case 'Underweight':
                return 'text-blue-500';
            case 'Normal':
                return 'text-green-500';
            case 'Overweight':
                return 'text-yellow-500';
            case 'Obese':
                return 'text-red-500';
            default:
                return 'text-neutral-400';
        }
    };

    const getCategoryIcon = () => {
        switch (category) {
            case 'Underweight':
                return <TrendingDown size={32} />;
            case 'Normal':
                return <Minus size={32} />;
            case 'Overweight':
            case 'Obese':
                return <TrendingUp size={32} />;
            default:
                return <Calculator size={32} />;
        }
    };

    return (
        <div className="container py-6 animate-fadeIn">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">BMI Calculator</h1>
                <p className="text-neutral-400">Calculate your Body Mass Index</p>
            </div>

            <Card hoverable={false} className="mb-6">
                <div className="space-y-4">
                    <Input
                        label="Height (cm)"
                        type="number"
                        fullWidth
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="180"
                    />

                    <Input
                        label="Weight (kg)"
                        type="number"
                        fullWidth
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="75"
                    />

                    <Button variant="primary" fullWidth onClick={calculateBMI}>
                        <Calculator size={20} />
                        Calculate BMI
                    </Button>
                </div>
            </Card>

            {bmi !== null && (
                <Card hoverable={false} className="animate-fadeIn">
                    <div className="text-center">
                        <div className={`mb-4 ${getCategoryColor()}`}>
                            {getCategoryIcon()}
                        </div>
                        <div className="text-5xl font-bold mb-2">{bmi}</div>
                        <div className={`text-2xl font-semibold mb-6 ${getCategoryColor()}`}>
                            {category}
                        </div>

                        <div className="bg-neutral-800 rounded-lg p-4 text-left">
                            <h4 className="font-bold mb-3">BMI Categories</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Underweight</span>
                                    <span className="text-blue-500">{'< 18.5'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Normal weight</span>
                                    <span className="text-green-500">18.5 - 24.9</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Overweight</span>
                                    <span className="text-yellow-500">25 - 29.9</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-400">Obese</span>
                                    <span className="text-red-500">≥ 30</span>
                                </div>
                            </div>
                        </div>

                        {height && weight && (
                            <div className="mt-4 p-4 bg-primary-500/10 border border-primary-500/20 rounded-lg text-sm">
                                <p className="text-neutral-300">
                                    Based on your height ({height}cm), a healthy weight range is approximately{' '}
                                    <span className="font-bold text-primary-500">
                                        {Math.round((18.5 * Math.pow(parseFloat(height) / 100, 2)))} - {Math.round((24.9 * Math.pow(parseFloat(height) / 100, 2)))} kg
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>
                </Card>
            )}
        </div>
    );
}
>>>>>>> e13a86e7f2e6373aec0671b0c6aa2f3e904bab34
