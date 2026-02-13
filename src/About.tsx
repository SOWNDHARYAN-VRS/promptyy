import { useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 px-6 transition-colors duration-500 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-16">
                    {/* Header Section */}
                    <div className="text-center space-y-4">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                            The laboratory
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter">
                            About<span className="text-indigo-600">Promptyy</span>
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                            Algorithmic tools and high-fidelity environments designed for modern storytellers and world-builders.
                        </p>
                    </div>

                    {/* Mission Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Precision Benchmarking</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                We believe in the power of data-driven creativity. Our tools analyze prose rhythm, lexical resonance, and world-building constraints to help you refine your craft with surgical precision.
                            </p>
                        </div>
                        <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-4">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">The Art of Flow</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                From distraction-free writing environments to procedural world-generation, Promptyy is built to remove friction and keep you in the "rhythm" of your story.
                            </p>
                        </div>
                    </div>

                    {/* Detailed Features Section */}
                    <div className="space-y-12">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Our Technology</h2>
                            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                                Cutting-edge algorithms designed specifically for creative writing and world-building
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Flex-Pace Algorithm</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    Analyzes sentence length variation to identify monotonous or fragmented writing patterns. 
                                    Helps create dynamic, engaging prose that keeps readers interested.
                                </p>
                                <ul className="text-slate-500 dark:text-slate-500 space-y-2 text-sm">
                                    <li>• Real-time rhythm analysis</li>
                                    <li>• Sentence variation metrics</li>
                                    <li>• Flow optimization suggestions</li>
                                    <li>• Professional writing standards</li>
                                </ul>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Nodal Echo Detection</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    Identifies recurring themes and lexical patterns in your writing using advanced 
                                    heat-mapping algorithms to track word resonance and thematic consistency.
                                </p>
                                <ul className="text-slate-500 dark:text-slate-500 space-y-2 text-sm">
                                    <li>• Thematic pattern recognition</li>
                                    <li>• Lexical resonance mapping</li>
                                    <li>• Word frequency analysis</li>
                                    <li>• Motif tracking system</li>
                                </ul>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">World Generation Engine</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    Creates linguistically consistent names, places, and concepts tailored to specific 
                                    genres using phonetic patterns and cultural naming conventions.
                                </p>
                                <ul className="text-slate-500 dark:text-slate-500 space-y-2 text-sm">
                                    <li>• Genre-specific linguistics</li>
                                    <li>• Cultural naming patterns</li>
                                    <li>• Prompt generation system</li>
                                    <li>• World consistency tools</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Use Cases Section */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Who Uses Promptyy</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Novelists</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Craft compelling narratives with advanced rhythm analysis and world-building tools
                                </p>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎲</span>
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Game Masters</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Create immersive worlds with consistent naming and lore generation systems
                                </p>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Educators</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Teach writing techniques with data-driven insights and analytical tools
                                </p>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                                <div className="w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">✍️</span>
                                </div>
                                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Content Creators</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Produce engaging content with professional writing quality and consistency
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy Section */}
                    <div className="p-12 rounded-[3rem] bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 border border-slate-200 dark:border-slate-700">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Philosophy</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                We believe that great writing comes from the intersection of creativity and craft. 
                                Our tools are designed to enhance, not replace, the human element of storytelling. 
                                By providing data-driven insights and removing technical barriers, we help writers 
                                focus on what matters most: telling compelling stories that resonate with readers.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 mt-12">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Privacy First</div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Your work stays on your device. No cloud storage, no data mining.</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Open Source</div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Transparent algorithms you can trust and modify for your needs.</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Writer Focused</div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Built by writers, for writers, with real-world creative challenges in mind.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Module */}
                    <div className="p-10 rounded-[3rem] bg-slate-900 dark:bg-white/5 border border-white/5 shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-4 text-center md:text-left">
                                <h2 className="text-3xl font-black text-white tracking-tight">Connect with the Dev</h2>
                                <p className="text-slate-400 font-medium max-w-md">
                                    Have feedback, suggestions, or just want to talk about procedural world-building? Reach out directly.
                                </p>
                            </div>
                            <a
                                href="mailto:dev.promptyy@gmail.com"
                                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-600/20 flex items-center gap-3"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                dev.promptyy@gmail.com
                            </a>
                        </div>
                        {/* Decorative Background Element */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-700" />
                    </div>

                    {/* Footer Nav */}
                    <div className="flex justify-center pt-8">
                        <button
                            onClick={() => navigate("/")}
                            className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-indigo-600 transition-colors"
                        >
                            ← Back to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
