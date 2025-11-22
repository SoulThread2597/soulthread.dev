'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from "lucide-react"

export const ThemeToggleButton = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>("dark");

    useEffect(() => {
        // On mount, check localStorage for the saved theme
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // If no saved theme, check system preference
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    useEffect(() => {
        // Whenever the theme state changes, update localStorage and the document class
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-accent"
            aria-label="Toggle dark mode"
        >
            {theme === 'light' ? (
                <Moon className="h-6 w-6" />
            ) : (
                <Sun className="h-6 w-6" />
            )}
        </button>
    );
};

export default ThemeToggleButton;