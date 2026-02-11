import { NavLink } from "react-router";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved === 'dark';
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const tabs = [
        { name: "Home", path: "/", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
        { name: "Write", path: "/write", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
        { name: "Tools", path: "/tools", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        { name: "World Lab", path: "/world-lab", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
        { name: "About", path: "/about", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-slate-200/40 dark:border-white/5 bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl transition-all duration-700 ease-in-out">
            <div className="flex items-center justify-between p-3 max-w-screen-2xl mx-auto px-6">

                {/* Brand Logo */}
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="relative">
                        <div className="absolute -inset-1.5 bg-gradient-to-tr from-slate-400 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-700 ease-in-out"></div>
                        <img className="relative w-9 h-9 rounded-xl invert dark:invert-0 opacity-80 group-hover:opacity-100 transition-all duration-500 ease-in-out" src="/icon.svg" alt="Promptyy Logo" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-semibold tracking-tight text-slate-800 dark:text-slate-100 transition-colors duration-700 ease-in-out">
                            Promptyy
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] -mt-1 transition-colors duration-700 ease-in-out">
                            Writer's Flow
                        </span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-2 bg-slate-200/30 dark:bg-white/5 p-1.5 rounded-2xl border border-slate-200/20 dark:border-white/5 transition-all duration-700 ease-in-out">
                    {tabs.map((tab) => (
                        <NavLink
                            key={tab.path}
                            to={tab.path}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-500 ease-in-out group ${isActive
                                    ? "bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-200/50 dark:ring-white/10"
                                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                                }`
                            }
                        >
                            <svg
                                className="w-4 h-4 transition-transform duration-500 ease-in-out group-hover:scale-110"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tab.icon} />
                            </svg>
                            <span className="text-[13px] font-medium tracking-tight">{tab.name}</span>
                        </NavLink>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2.5 rounded-xl hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition-all duration-500 ease-in-out border border-transparent hover:border-slate-200/50 dark:hover:border-white/10"
                        title={isDark ? "Light Mode" : "Dark Mode"}
                    >
                        {isDark ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
