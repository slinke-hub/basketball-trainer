<<<<<<< HEAD
import React from 'react';

export default function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
    const sizes = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4',
    };

    return (
        <div className="flex items-center justify-center">
            <div className={`${sizes[size]} border-primary-500 border-t-transparent rounded-full animate-spin`} />
        </div>
    );
}
=======
import React from 'react';

export default function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
    const sizes = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4',
    };

    return (
        <div className="flex items-center justify-center">
            <div className={`${sizes[size]} border-primary-500 border-t-transparent rounded-full animate-spin`} />
        </div>
    );
}
>>>>>>> e13a86e7f2e6373aec0671b0c6aa2f3e904bab34
