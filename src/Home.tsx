import { Link } from "react-router";

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-700 ease-in-out">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 mb-8 transition-all duration-700">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Version 1.0 is here</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight mb-8 transition-colors duration-700">
                        The space where <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
                            creativity meets flow
                        </span>.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed transition-colors duration-700">
                        A minimal, distraction-free environment designed for professional writers.
                        Keep your thoughts organized, your projects focused, and your creativity flowing.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Link
                            to="/write"
                            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-semibold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-slate-900/10 dark:shadow-white/5"
                        >
                            Start Writing Now
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-4 bg-white/50 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold text-lg border border-slate-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all duration-300"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            <div className="w-full bg-slate-200/30 dark:bg-white/[0.02] border-y border-slate-200/40 dark:border-white/5 py-4 overflow-hidden relative">
                <div className="flex items-center justify-center gap-8 text-slate-400 dark:text-slate-500 whitespace-nowrap px-6 opacity-70">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                        Bring stories to life in one tab with human emotions
                    </span>
                </div>
            </div>

            {/* Feature Grid - Subtle Previews */}
            <section className="py-20 px-6 border-t border-slate-200/40 dark:border-white/5">
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Offline First",
                            desc: "Everything is saved locally. Your data never leaves your device.",
                            icon: "M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3c1.71 0 3.3.413 4.7 1.141",
                        },
                        {
                            title: "Modern Tools",
                            desc: "A suite of powerful algorithmic tools built specifically for writers.",
                            icon: "M13 10V3L4 14h7v7l9-11h-7z",
                        },
                        {
                            title: "World Lab",
                            desc: "Build complex worlds, characters, and lore with organized databases.",
                            icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9",
                        },
                    ].map((feature, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-3xl bg-white/40 dark:bg-white/[0.02] border border-slate-200/50 dark:border-white/5 hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-all duration-500 group flex items-start gap-6"
                        >
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-7 h-7 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight transition-colors duration-700">{feature.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm transition-colors duration-700">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Content Section */}
            <section className="py-20 px-6 bg-white/30 dark:bg-slate-900/30">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Why Writers Choose Promptyy
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                Advanced Text Analysis
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our proprietary algorithms analyze your writing in real-time, providing insights into rhythm, 
                                flow, and lexical patterns. The Flex-Pace algorithm measures sentence variation to help you 
                                maintain engaging prose, while Nodal Echo identifies recurring themes and motifs in your work.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Professional writers use these tools to refine their style, eliminate repetitive patterns, 
                                and create more compelling narratives. Whether you're writing fiction, non-fiction, or 
                                technical content, our analysis tools help you achieve professional polish.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
                                World-Building Excellence
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                The World Lab generates linguistically consistent names, places, and concepts tailored to 
                                your chosen genre. Our algorithms understand the phonetic patterns and naming conventions 
                                specific to Fantasy, Sci-Fi, Mythology, and Mystery genres.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Create immersive worlds with culturally appropriate names, generate creative prompts that 
                                respect genre conventions, and build complex lore systems that maintain internal consistency. 
                                Perfect for novelists, game masters, and creative writing instructors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Writing Tips Section */}
            <section className="py-20 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                        Writing Resources & Tips
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                                Mastering Sentence Rhythm
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                Varying sentence length creates dynamic prose. Use short sentences for impact and longer 
                                sentences for detailed descriptions. Our rhythm analyzer helps you find the perfect balance.
                            </p>
                            <ul className="text-slate-500 dark:text-slate-500 space-y-2 text-sm">
                                <li>• Mix simple, compound, and complex sentences</li>
                                <li>• Use rhythm to control reading pace</li>
                                <li>• Create flow with transitional phrases</li>
                                <li>• Break up monotonous patterns</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                                Building Consistent Worlds
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                Consistency is key to immersive world-building. Keep detailed notes about your world's 
                                rules, cultures, and geography. Use our World Lab to generate culturally appropriate names.
                            </p>
                            <ul className="text-slate-500 dark:text-slate-500 space-y-2 text-sm">
                                <li>• Establish clear world rules early</li>
                                <li>• Create naming conventions</li>
                                <li>• Document cultural details</li>
                                <li>• Use maps and timelines</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                                Overcoming Writer's Block
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                Every writer faces creative blocks. Use our prompt generator and writing tools to 
                                jumpstart your creativity. Sometimes changing your environment or writing routine helps.
                            </p>
                            <ul className="text-slate-500 dark:text-slate-500 space-y-2 text-sm">
                                <li>• Try different writing prompts</li>
                                <li>• Change your writing schedule</li>
                                <li>• Use our analytical tools</li>
                                <li>• Read widely in your genre</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
