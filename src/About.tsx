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
