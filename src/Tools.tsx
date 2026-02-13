import { useState, useEffect } from "react";

/**
 * ALGORITHM 1: Flex-Pace (Rhythmic Flow)
 */
const analyzeRhythm = (text: string) => {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    if (sentences.length < 2) return { score: 0, status: "Inert" };

    const lengths = sentences.map(s => s.trim().split(/\s+/).length);
    const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
    const squareDiffs = lengths.map(l => Math.pow(l - avg, 2));
    const variance = squareDiffs.reduce((a, b) => a + b, 0) / lengths.length;
    const stdDev = Math.sqrt(variance);
    const rvs = (stdDev / avg).toFixed(2);

    let status = "Balanced";
    if (parseFloat(rvs) < 0.3) status = "Monotonous";
    if (parseFloat(rvs) > 0.8) status = "Fragmented";

    return { score: rvs, status, avg: avg.toFixed(1) };
};

/**
 * ALGORITHM 2: Nodal Echo (Lexical Resonance)
 */
const analyzeEcho = (text: string) => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const stopWords = new Set(["the", "and", "a", "to", "of", "in", "is", "it", "that", "was", "for", "on", "are", "with", "as", "be", "at", "by", "this"]);
    const echoes: { word: string; heat: number; count: number }[] = [];
    const wordPositions: Record<string, number[]> = {};

    words.forEach((word, i) => {
        if (word.length < 3 || stopWords.has(word)) return;
        if (!wordPositions[word]) wordPositions[word] = [];
        wordPositions[word].push(i);
    });

    Object.entries(wordPositions).forEach(([word, positions]) => {
        if (positions.length < 2) return;
        let heat = 0;
        for (let i = 1; i < positions.length; i++) {
            const dist = positions[i] - positions[i - 1];
            if (dist < 50) {
                heat += 1 / Math.log2(dist + 1);
            }
        }
        if (heat > 0.5) {
            echoes.push({ word, heat: parseFloat(heat.toFixed(2)), count: positions.length });
        }
    });

    return echoes.sort((a, b) => b.heat - a.heat).slice(0, 5);
};

/**
 * ALGORITHM 3: Readability Depth (Lexical Density)
 */
const analyzeReadability = (text: string) => {
    const words = text.match(/\b\w+\b/g) || [];
    if (words.length === 0) return { score: 0, level: "Neutral" };
    const avgLength = words.reduce((acc, word) => acc + word.length, 0) / words.length;

    const normalized = Math.min(Math.max((avgLength - 3) / 4, 0), 1);

    let level = "Standard";
    if (avgLength > 5.2) level = "Sophisticated";
    if (avgLength < 4.2) level = "Accessible";

    return { score: normalized.toFixed(2), level, raw: avgLength.toFixed(1) };
};

const Tools = () => {
    const [text, setText] = useState("The ancient library stood silent, its towering shelves filled with forgotten knowledge. Dust motes danced in the shafts of golden light that pierced the gloom. Each book held a story, a world waiting to be discovered by those brave enough to turn the pages. The librarian, a woman with eyes that had seen centuries, moved with practiced grace through the aisles. Her fingers traced the spines of volumes that contained the wisdom of ages, their leather covers worn smooth by countless hands. She knew that within these walls lay the power to change the world, one reader at a time. The scent of old paper and ink filled the air, a perfume that spoke of countless stories waiting to be told.");
    const [rhythmResult, setRhythmResult] = useState<any>(null);
    const [readabilityResult, setReadabilityResult] = useState<any>(null);
    const [echoResult, setEchoResult] = useState<any[]>([]);

    useEffect(() => {
        if (!text.trim()) {
            setRhythmResult(null);
            setReadabilityResult(null);
            setEchoResult([]);
            return;
        }

        const handleAnalyze = () => {
            setRhythmResult(analyzeRhythm(text));
            setReadabilityResult(analyzeReadability(text));
            setEchoResult(analyzeEcho(text));
        };

        const timer = setTimeout(handleAnalyze, 300);
        return () => clearTimeout(timer);
    }, [text]);

    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const charCount = text.length;

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 px-6 transition-colors duration-500 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Dashboard Grid (Matching World Lab) */}
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left Panel: Header, Stats & Metrics */}
                    <div className="lg:col-span-4 space-y-10">
                        <div>
                            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
                                Prose<span className="text-indigo-600">Refinery</span>
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-tight">
                                High-fidelity analytics for refined manuscripts.
                            </p>
                        </div>

                        {/* Live Metadata Section */}
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Manuscript Stats</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 rounded-[1.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5">
                                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Words</span>
                                    <span className="text-2xl font-black text-slate-800 dark:text-white">{wordCount}</span>
                                </div>
                                <div className="p-6 rounded-[1.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5">
                                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Chars</span>
                                    <span className="text-2xl font-black text-slate-800 dark:text-white">{charCount}</span>
                                </div>
                            </div>
                        </div>

                        {/* Neural Metrics (Synthesis Modules Style) */}
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Flow Analysis</h3>

                            <div className="grid grid-cols-1 gap-4">
                                {/* Rhythm Status Card */}
                                <div className="p-6 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm space-y-4 transition-all">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-xl">⚡</div>
                                            <span className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-tighter">Pacing Intensity</span>
                                        </div>
                                        <span className="text-xl font-black text-indigo-600 tracking-tighter">
                                            {rhythmResult ? Math.round(parseFloat(rhythmResult.score) * 100) : 0}%
                                        </span>
                                    </div>
                                    <div className="h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-indigo-500 transition-all duration-1000"
                                            style={{ width: `${rhythmResult ? Math.min(parseFloat(rhythmResult.score) * 100, 100) : 0}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                                        <span className={rhythmResult?.status === "Monotonous" ? "text-amber-500" : "text-slate-400"}>Repetitive</span>
                                        <span className={rhythmResult?.status === "Balanced" ? "text-indigo-500" : "text-slate-400"}>Balanced</span>
                                        <span className={rhythmResult?.status === "Fragmented" ? "text-red-500" : "text-slate-400"}>Uneven</span>
                                    </div>
                                </div>

                                {/* Readability Depth Card */}
                                <div className="p-6 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm space-y-4 transition-all">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4 items-center">
                                            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-xl">🧠</div>
                                            <span className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-tighter">Readability Depth</span>
                                        </div>
                                        <span className="text-xl font-black text-emerald-600 tracking-tighter">
                                            {readabilityResult ? readabilityResult.raw : "0.0"}
                                        </span>
                                    </div>
                                    <div className="h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-emerald-500 transition-all duration-1000"
                                            style={{ width: `${readabilityResult ? Math.min(parseFloat(readabilityResult.score) * 100, 100) : 0}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-[9px] font-black uppercase tracking-widest">
                                        <span className={readabilityResult?.level === "Accessible" ? "text-emerald-500" : "text-slate-400"}>Accessible</span>
                                        <span className={readabilityResult?.level === "Standard" ? "text-indigo-500" : "text-slate-400"}>Standard</span>
                                        <span className={readabilityResult?.level === "Sophisticated" ? "text-amber-500" : "text-slate-400"}>Sophisticated</span>
                                    </div>
                                </div>

                                {/* Echo Word Tile */}
                                <div className="p-6 rounded-[2rem] bg-slate-900 border border-white/5 shadow-xl text-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">🔊</div>
                                        <h4 className="font-bold text-[10px] text-indigo-400 uppercase tracking-widest">Echo Detection</h4>
                                    </div>
                                    <div className="space-y-2">
                                        {echoResult.length > 0 ? (
                                            echoResult.map((e, idx) => (
                                                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] transition-all">
                                                    <div className="flex items-center gap-3">
                                                        <span className="font-bold text-xs tracking-tight capitalize opacity-90">"{e.word}"</span>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <span className="text-[10px] font-black bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-md">
                                                            {e.count}x
                                                        </span>
                                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-slate-500 text-[10px] italic">No resonance detected.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: The Paper (Canvas) */}
                    <div className="lg:col-span-8">
                        <div className="h-full bg-white dark:bg-[#0a0a0a] rounded-[4rem] border border-slate-200/60 dark:border-white/5 flex flex-col shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] min-h-[750px] overflow-hidden transition-all duration-700">
                            <div className="px-8 py-6 border-b border-slate-100 dark:border-white/5 bg-white/[0.4] dark:bg-white/[0.02] flex items-center justify-between backdrop-blur-sm">
                                <div>
                                    <h2 className="font-black text-slate-900 dark:text-white text-2xl tracking-tight">Prose</h2>
                                    <div className="h-1 w-20 bg-indigo-600 mt-1 rounded-full" />
                                </div>

                            </div>

                            <div className="flex-1 px-8 py-3 bg-gradient-to-b from-transparent to-slate-50/20 dark:to-white/[0.01]">
                                <textarea
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Begin your manuscript here..."
                                    className="w-full h-full bg-transparent border-none outline-none text-slate-800 dark:text-slate-100 text-lg leading-[1.8] resize-none selection:bg-indigo-500/20 placeholder:text-slate-400 dark:placeholder:text-slate-800 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Tools;
