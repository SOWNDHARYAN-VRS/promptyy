import { useState, useEffect, useRef } from "react";

const Writer = () => {
    const [title, setTitle] = useState(localStorage.getItem("promptyy_title") || "Untitled Story");
    const [startTime] = useState(localStorage.getItem("promptyy_start_time") || new Date().toLocaleString());

    // Timer State
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [customTime, setCustomTime] = useState("20");

    const editorRef = useRef<HTMLDivElement>(null);

    // Load content from localStorage on mount
    useEffect(() => {
        const savedContent = localStorage.getItem("promptyy_content");
        if (savedContent && editorRef.current) {
            editorRef.current.innerHTML = savedContent;
        }
        if (!localStorage.getItem("promptyy_start_time")) {
            localStorage.setItem("promptyy_start_time", startTime);
        }
    }, []);

    // Timer Logic
    useEffect(() => {
        let interval: any = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const handleInput = () => {
        if (editorRef.current) {
            localStorage.setItem("promptyy_content", editorRef.current.innerHTML);
        }
    };

    useEffect(() => {
        localStorage.setItem("promptyy_title", title);
    }, [title]);

    const execCommand = (command: string, value?: string) => {
        document.execCommand(command, false, value);
    };

    const downloadTXT = () => {
        if (!editorRef.current) return;
        const content = editorRef.current.innerText || editorRef.current.textContent || "";

        // Sanitize filename for all OSs
        const sanitizedTitle = (title || "Untitled_Story")
            .replace(/[<>:"/\\|?*]/g, '')
            .replace(/\s+/g, '_')
            .trim();

        const fileName = sanitizedTitle || "Untitled_Story";
        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = 'none';
        a.href = url;
        a.download = `${fileName}.txt`;
        document.body.appendChild(a);
        a.click();

        // Small delay to ensure browser handles the trigger
        setTimeout(() => {
            if (document.body.contains(a)) document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
    };

    const setTimer = (minutes: number) => {
        setTimeLeft(minutes * 60);
        setIsActive(false);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-6 transition-colors duration-700">
            {/* Writing Tips Header */}
            <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Writing Environment Tips</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-3xl mb-2">🎯</div>
                            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Focus Mode</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Minimize distractions and stay in the flow</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">⏰</div>
                            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Time Management</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Use timers for structured writing sessions</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">💾</div>
                            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Auto-Save</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Your work is saved locally as you type</p>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                    [contenteditable]:empty:before {
                        content: attr(data-placeholder);
                        color: #94a3b8;
                    }
                    .dark [contenteditable]:empty:before {
                        color: #334155;
                    }
                `}
            </style>
            <div className="max-w-4xl mx-auto">

                <div className="sticky top-24 z-10 mb-8 justify-center flex item-center">
                    <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 px-4 py-2 rounded-2xl shadow-xl">
                        <div className="text-xl font-mono font-bold text-slate-700 dark:text-slate-300 min-w-[60px]">
                            {formatTime(timeLeft)}
                        </div>
                        <div className="h-4 w-px bg-slate-200 dark:bg-white/10" />
                        <div className="flex items-center gap-1.5">
                            {[20, 30, 40].map((m) => (
                                <button
                                    key={m}
                                    onClick={() => setTimer(m)}
                                    className="text-[10px] font-bold text-slate-400 hover:text-blue-500 transition-colors uppercase tracking-widest px-1"
                                >
                                    {m}m
                                </button>
                            ))}
                            <div className="flex items-center ml-2 border-l border-slate-200 dark:border-white/10 pl-2">
                                <input
                                    type="number"
                                    value={customTime}
                                    onChange={(e) => setCustomTime(e.target.value)}
                                    className="w-8 bg-transparent text-[10px] font-bold text-slate-500 outline-none text-center"
                                    placeholder="Min"
                                />
                                <button
                                    onClick={() => setTimer(Number(customTime))}
                                    className="text-[10px] font-bold text-blue-500 uppercase ml-1"
                                >
                                    Set
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsActive(!isActive)}
                            className={`ml-2 p-2 rounded-full transition-all ${isActive ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}
                        >
                            {isActive ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                            ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                            )}
                        </button>
                        <button onClick={() => execCommand('bold')} className="p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 transition-colors" title="Bold">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" /></svg>
                        </button>
                        <button onClick={() => execCommand('italic')} className="p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 transition-colors" title="Italic">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 20l4-16m-9 16h6m2-16h6" /></svg>
                        </button>
                        <button onClick={() => execCommand('underline')} className="p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 transition-colors" title="Underline">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12a4 4 0 01-4 4 4 4 0 01-4-4V4M4 20h16" /></svg>
                        </button>
                        <button onClick={() => execCommand('justifyLeft')} className="p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 transition-colors" title="Align Left">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" /></svg>
                        </button>
                        <button onClick={() => execCommand('justifyCenter')} className="p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 transition-colors" title="Align Center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M7 12h10M4 18h16" /></svg>
                        </button>
                        <button onClick={() => execCommand('justifyRight')} className="p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400 transition-colors" title="Align Right">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M10 12h10M4 18h16" /></svg>
                        </button>
                    </div>
                </div>

                {/* Editor Surface with Integrated Title */}
                <div className="relative">
                    <input
                        type="text"
                        value={title}
                        placeholder="Enter title"
                        onChange={(e) => setTitle(e.target.value)}
                        className="absolute w-[calc(100%-8rem)] text-center text-[25px] font-bold top-2 left-16 z-20 p-2 text-slate-900 dark:text-white transition-all border-none outline-none bg-transparent"
                    />
                    <button
                        onClick={downloadTXT}
                        className="absolute top-4 right-4 z-30 p-2 text-slate-900 dark:text-white hover:scale-110 active:scale-90 transition-all bg-white/50 dark:bg-slate-800/50 rounded-lg"
                        title="Download TXT"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </button>

                    <div
                        ref={editorRef}
                        contentEditable
                        onInput={handleInput}
                        className="w-full min-h-[60vh] p-6 pt-18 rounded-3xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 outline-none text-slate-700 dark:text-slate-200 text-lg leading-relaxed shadow-sm transition-all focus:ring-1 focus:ring-slate-300 dark:focus:ring-white/10"
                        data-placeholder="Once upon a time..."
                        suppressContentEditableWarning={true}
                    >

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Writer;
