export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to MyApp
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A modern Next.js application built with TypeScript and Tailwind CSS.
          Ready for your next open source project.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next.js Docs
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              TypeScript support
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Tailwind CSS styling
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Static export ready
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              SEO optimized
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
