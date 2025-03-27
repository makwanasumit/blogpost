'use client'
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {  // Fixed function name
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem('theme');
        return value || 'light';
    }
    return 'light'; // Default return value
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(getFromLocalStorage);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);


    const toggle  = () => {
     setTheme(theme === 'light' ? 'dark' : 'light')   
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
