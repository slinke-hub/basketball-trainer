import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

export default function Input({ label, error, fullWidth = false, className = '', ...props }: InputProps) {
    const widthClass = fullWidth ? 'w-full' : '';

    return (
        <div className={`flex flex-col gap-1 ${widthClass}`}>
            {label && (
                <label className="text-sm font-medium text-neutral-300">
                    {label}
                </label>
            )}
            <input
                className={`
          bg-input-bg border border-input-border rounded-lg px-4 py-2
          text-foreground placeholder-neutral-500
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          transition-all duration-200
          ${error ? 'border-error focus:ring-error' : ''}
          ${className}
        `}
                {...props}
            />
            {error && (
                <span className="text-sm text-error">{error}</span>
            )}
        </div>
    );
}
