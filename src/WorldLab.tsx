import { useState } from "react";
import Adsense from './Adsense';

type Genre = "Fantasy" | "Sci-Fi" | "Mythology" | "Mystery";

const CORE_LINGUISTICS = {
    consonants: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "z"],
    initialClusters: ["br", "cr", "dr", "gr", "st", "tr", "pl", "fl", "sl", "pr", "th", "ch", "sh"],
    vowelClusters: ["a", "e", "i", "o", "u", "ai", "ea", "io", "ou", "ie", "ay"],
    medialClusters: ["l", "r", "n", "m", "s", "t", "d"],
};

const GENRE_RULES: Record<Genre, { endings: string[], placeMod: string[], patterns: string[][] }> = {
    Fantasy: {
        endings: ["wyn", "reth", "lon", "thas", "riel", "vail", "gorn", "dore", "lith", "mar", "eth", "on", "wyn"],
        placeMod: ["Citadel", "Sanctum", "Domain", "Vale", "Peak", "Haven", "Tower", "Keep"],
        patterns: [["I", "V", "M", "E"], ["C", "V", "C", "E"], ["I", "V", "E"]]
    },
    "Sci-Fi": {
        endings: ["is", "ax", "oid", "on", "ite", "us", "prime", "core", "node", "flux", "plex", "grid"],
        placeMod: ["Sector", "Station", "Hub", "Colony", "Quadrant", "Matrix", "Array", "Outpost"],
        patterns: [["C", "V", "C", "E"], ["I", "V", "E"], ["C", "V", "M", "E"]]
    },
    Mythology: {
        endings: ["os", "us", "is", "es", "an", "ar", "or", "on", "a", "ia", "as", "eus"],
        placeMod: ["Shrine", "Sands", "Plateau", "Pass", "Springs", "Cove", "Eternal", "Altar"],
        patterns: [["C", "V", "C", "V", "E"], ["I", "V", "M", "V", "E"], ["C", "V", "E"]]
    },
    Mystery: {
        endings: ["wood", "ford", "well", "hall", "ton", "field", "shire", "ham", "ley", "gate", "view", "side"],
        placeMod: ["Manor", "Estate", "Village", "Lodge", "Alley", "Lane", "Road", "Court"],
        patterns: [["C", "V", "C", "E"], ["I", "V", "M", "E"], ["C", "V", "E"]]
    }
};

type ItemType = "Identity" | "Location" | "Prompt";

const generate = (genre: Genre, type: ItemType) => {
    const rules = GENRE_RULES[genre];
    const pattern = rules.patterns[Math.floor(Math.random() * rules.patterns.length)];
    const rand = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

    let name = "";
    for (const token of pattern) {
        switch (token) {
            case "I": name += rand(CORE_LINGUISTICS.initialClusters); break;
            case "C": name += rand(CORE_LINGUISTICS.consonants); break;
            case "V": name += rand(CORE_LINGUISTICS.vowelClusters); break;
            case "M": name += rand(CORE_LINGUISTICS.medialClusters); break;
            case "E": name += rand(rules.endings); break;
        }
    }

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    if (type === "Identity") {
        if (genre === "Mystery") {
            const firstNames = ["Arthur", "Julian", "Silas", "Victor", "Clara", "Rose", "Elias", "Hugo", "Edgar", "Rose"];
            return `${rand(firstNames)} ${capitalizedName}`;
        }
        return capitalizedName;
    }

    if (type === "Location") {
        const mod = rand(rules.placeMod);
        const patterns = [
            `${mod} of ${capitalizedName}`,
            `${capitalizedName} ${mod}`,
            `${capitalizedName}`
        ];
        return genre === "Mystery" ? `${capitalizedName} ${mod}` : rand(patterns);
    }

    return capitalizedName;
};

/**
 * ALGORITHM: Prompt Spark (Creative Seed)
 */
const PROMPT_PARTS: Record<Genre, { subjects: string[], constraints: string[] }> = {
    Fantasy: {
        subjects: ["a child with a stone that glows in the dark", "a dragon hoarding memories instead of gold", "a thief who steals shadows", "a forest where the trees move at night"],
        constraints: ["where magic has a physical weight", "told as a legendary folk tale", "without mentioning the sun", "where names are the only currency"]
    },
    "Sci-Fi": {
        subjects: ["an amnesiac robot in a forest", "a ship pilot who speaks to stars", "an underwater city with a leaking glass dome", "a planet where time runs backwards"],
        constraints: ["written as a series of intercepted telegrams", "taking place entirely in a single minute", "where oxygen is a high-cost subscription", "told from the perspective of an AI's log"]
    },
    Mythology: {
        subjects: ["a lighthouse keeper who lost the sea", "a hero whose sword is made of glass", "a deity who forgot their purpose", "a bird that carries the moon on its back"],
        constraints: ["where gods live among mortals in silence", "told as an ancient prophecy", "starting and ending with the same line", "without using any colors in the description"]
    },
    Mystery: {
        subjects: ["a clockmaker who can stop time", "a house with a room that wasn't there yesterday", "a detective who can see only lies", "a letter delivered 50 years too late"],
        constraints: ["where everyone is a suspect but no one is guilty", "told from the perspective of an inanimate object", "taking place in a town that doesn't exist on maps", "without using any adjectives"]
    }
};

const generatePrompt = (genre: Genre) => {
    const parts = PROMPT_PARTS[genre];
    const rand = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    const templates = [
        () => `Write a ${genre.toLowerCase()} tale about ${rand(parts.subjects)}.`,
        () => `A ${genre.toLowerCase()} story ${rand(parts.constraints)}.`,
        () => `${rand(parts.subjects)} while ${rand(parts.constraints)}.`
    ];
    return templates[Math.floor(Math.random() * templates.length)]();
};

const WorldLab = () => {
    const [genre, setGenre] = useState<Genre>("Fantasy");
    const [results, setResults] = useState<{ type: ItemType, value: string, id: number }[]>([]);

    const handleGenerate = (type: ItemType) => {
        const value = type === "Prompt" ? generatePrompt(genre) : generate(genre, type);
        setResults(prev => [{ type, value, id: Date.now() }, ...prev].slice(0, 20));
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 px-6 transition-colors duration-500 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Left Panel: Controls & Header */}
                    <div className="lg:col-span-4 space-y-10">
                        <div>
                            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
                                World<span className="text-indigo-600">Lab</span>
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium tracking-tight">
                                High-fidelity procedural world-building.
                            </p>
                        </div>

                        {/* Domain Selection */}
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Select Domain</h3>
                            <div className="flex flex-wrap gap-2">
                                {(Object.keys(GENRE_RULES) as Genre[]).map((g) => (
                                    <button
                                        key={g}
                                        onClick={() => setGenre(g)}
                                        className={`px-5 py-2.5 rounded-xl text-[11px] font-bold transition-all border ${genre === g
                                            ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-transparent shadow-xl"
                                            : "bg-white dark:bg-white/5 text-slate-500 border-slate-200 dark:border-white/10 hover:border-indigo-400"
                                            }`}
                                    >
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Synthesis Actions */}
                        <div className="space-y-4">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Synthesis Actions</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <button
                                    onClick={() => handleGenerate("Prompt")}
                                    className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all group group shadow-sm text-left"
                                >
                                    <div className="w-1.5 h-6 bg-amber-500 rounded-full" />
                                    <div>
                                        <span className="block font-black text-slate-900 dark:text-white text-sm uppercase tracking-tighter" >Spark Prompt</span>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleGenerate("Identity")}
                                    className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all group group shadow-sm text-left"
                                >
                                    <div className="w-1.5 h-6 bg-indigo-400 rounded-full" />
                                    <div>
                                        <span className="block font-black text-slate-900 dark:text-white text-sm uppercase tracking-tighter" >Synthesize Identity</span>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleGenerate("Location")}
                                    className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-500/50 transition-all group group shadow-sm text-left"
                                >
                                    <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                                    <div>
                                        <span className="block font-black text-slate-900 dark:text-white text-sm uppercase tracking-tighter">Construct Location</span>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Ad Unit Placeholder (Google AdSense) */}
                        <div className="mt-8">
                            <div className="w-full min-h-[250px] rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-dashed border-slate-200 dark:border-white/10 flex flex-col items-center justify-center p-6 text-center space-y-2 opacity-60">
                                <Adsense />
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Synthesis Feed */}
                    <div className="lg:col-span-8">
                        <div className="h-full bg-slate-50 dark:bg-white/[0.02] rounded-[3.5rem] border border-slate-200/50 dark:border-white/5 flex flex-col shadow-inner min-h-[650px]">
                            <div className="px-10 py-8 border-b border-slate-200 dark:border-white/5 flex items-center justify-between bg-white/[0.2] dark:bg-white/[0.01] rounded-t-[3.5rem]">
                                <div>
                                    <h2 className="font-black text-slate-900 dark:text-white text-xl tracking-tight">Synthesis Feed</h2>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{genre} History Output</p>
                                </div>
                                <button
                                    onClick={() => setResults([])}
                                    className="px-4 py-2 rounded-xl text-[10px] font-bold text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all uppercase tracking-widest"
                                >
                                    Purge Memory
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto px-10 py-8 space-y-4 custom-scrollbar">
                                {results.length > 0 ? (
                                    results.map((res) => (
                                        <div
                                            key={res.id}
                                            className="group flex items-center justify-between p-6 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 transition-all cursor-pointer animate-in fade-in slide-in-from-right-4 duration-500"
                                            onClick={() => navigator.clipboard.writeText(res.value)}
                                        >
                                            <div className="flex items-center gap-6">
                                                <div className={`w-2 h-14 rounded-full shadow-inner ${res.type === 'Identity' ? 'bg-indigo-500' :
                                                    res.type === 'Location' ? 'bg-emerald-500' :
                                                        'bg-amber-500'
                                                    }`} />
                                                <div className="flex flex-col">
                                                    <span className={`text-[9px] font-bold uppercase tracking-widest leading-none mb-2 ${res.type === 'Identity' ? 'text-indigo-400' :
                                                        res.type === 'Location' ? 'text-emerald-400' :
                                                            'text-amber-500'
                                                        }`}>
                                                        {res.type}
                                                    </span>
                                                    <span className={`${res.type === 'Prompt' ? 'text-lg leading-relaxed' : 'text-2xl'} font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors`}>
                                                        {res.value}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 p-3 bg-slate-50 dark:bg-white/10 rounded-xl text-slate-400 transition-all">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                        <p className="text-slate-400 italic">No historical data in feed.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorldLab;
