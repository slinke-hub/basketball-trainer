import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom neon colors
                'neon-blue': '#00d9ff',
                'neon-blue-light': '#4de8ff',
                'neon-blue-dark': '#0080ff',
                'neon-purple': '#a855f7',
                'neon-cyan': '#06b6d4',
                'neon-pink': '#ec4899',
                'neon-green': '#10b981',

                // Keep default error color
                error: '#ef4444',
            },
        },
    },
    plugins: [],
};
export default config;
