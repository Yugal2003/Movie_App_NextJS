'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { LuMoonStar, LuSunMoon } from "react-icons/lu";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Handle toggling the dark mode
    const handleClick = () => {
        setDarkMode(!darkMode);
    };

    // Add or remove the dark mode class to the body tag
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <div className={`w-[100%] border-b-2 ${darkMode ? 'border-white' : 'border-black'}`}>
            <div className="flex flex-row justify-between items-center max-w-6xl mx-auto w-[80%] mt-4 p-4">
                <div>
                    <Link href="/">
                        <h1 className="text-2xl">IMDB</h1>
                    </Link>
                </div>

                <div className="flex flex-row gap-4">
                    <div>
                        {darkMode ? (
                            <button onClick={handleClick}>
                                <LuSunMoon size={22} />
                            </button>
                        ) : (
                            <button onClick={handleClick}>
                                <LuMoonStar size={22} />
                            </button>
                        )}
                    </div>
                    <Link href="/">
                        <h2>Home</h2>
                    </Link>

                    <Link href="/about">
                        <h2>About</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
