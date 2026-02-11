import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        adsbygoogle: { [key: string]: unknown }[];
    }
}

const Adsense = () => {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        // Ensure ad container has dimensions before pushing to AdSense
        const initializeAd = () => {
            if (adRef.current && window.adsbygoogle) {
                try {
                    // Check if container has actual dimensions
                    const rect = adRef.current.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) {
                        (window.adsbygoogle = window.adsbygoogle || []).push({});
                    } else {
                        // Retry after a short delay
                        setTimeout(initializeAd, 100);
                    }
                } catch (e) {
                    console.error('Adsense error:', e);
                }
            }
        };

        // Initialize ad after component mounts and DOM is ready
        const timer = setTimeout(initializeAd, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full min-h-[250px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
            <ins 
                ref={adRef}
                className="adsbygoogle"
                style={{ 
                    display: 'block',
                    width: '300px',
                    height: '250px'
                }}
                data-ad-client="ca-pub-7440197348376449"
                data-ad-slot="6945846286"
                data-ad-format="rectangle"
                data-full-width-responsive="false"
            />
        </div>
    );
};

export default Adsense;
