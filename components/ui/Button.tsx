import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    loading?: boolean;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    children,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-[0_0_20px_rgba(0,217,255,0.6)] hover:scale-105 neon-border',
        secondary: 'bg-neutral-800 text-neutral-100 border-2 border-neutral-700 hover:border-neon-blue hover:bg-neutral-700 hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]',
        ghost: 'bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border hover:border-neon-blue/30',
        danger: 'bg-error text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-7 py-3.5 text-lg',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}
            {children}
        </button>
    );
}
