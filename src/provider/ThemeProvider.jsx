'use client'
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }) => {

    const [mounted, setMounted] = useState(false)

    const { theme } = useContext(ThemeContext)

    console.log(theme)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (mounted) {
        return (
            <div className={`${theme === 'light' ? 'bg-whit text-black' : 'bg-black text-white'} text-black transition-all duration-300 ease-in-out`}>{children}</div>
        )
    }

}

export default ThemeProvider