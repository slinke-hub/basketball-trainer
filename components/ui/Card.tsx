import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
    glass?: boolean;
    onClick?: () => void;
}

export default function Card({ children, className = '', hoverable = true, glass = false, onClick }: CardProps) {
    const hoverClass = hoverable && onClick ? 'cursor-pointer hover:transform hover:translate-y-[-2px] hover:shadow-lg hover:border-primary-500' : '';
    const glassClass = glass ? 'glass' : '';

    return (
        <div
            className={`card ${hoverClass} ${glassClass} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
