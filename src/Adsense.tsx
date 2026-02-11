import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        adsbygoogle: { [key: string]: unknown }[];
    }
}

const Adsense = () => {
    const adRef = useRef<HTMLModElement>(null);
    const clientId = import.meta.env.VITE_ADSENSE_CLIENT_ID;
    const slotId = import.meta.env.VITE_ADSENSE_SLOT_ID;

    useEffect(() => {
        // Load AdSense script dynamically with client ID
        const loadAdSenseScript = () => {
            if (!document.querySelector('script[src*="adsbygoogle"]')) {
                const script = document.createElement('script');
                script.async = true;
                script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
                script.crossOrigin = 'anonymous';
                document.head.appendChild(script);
            }
        };

        loadAdSenseScript();

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

        // Initialize ad after script loads and DOM is ready
        const timer = setTimeout(initializeAd, 1000);

        return () => clearTimeout(timer);
    }, [clientId]);

    return (
        <div className="w-full min-h-[250px] bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center relative">
            <ins 
                ref={adRef}
                className="adsbygoogle"
                style={{ 
                    display: 'block',
                    width: '300px',
                    height: '250px'
                }}
                data-ad-client={clientId}
                data-ad-slot={slotId}
                data-ad-format="rectangle"
                data-full-width-responsive="false"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
                <span className="text-xs text-slate-500">Ad Space</span>
            </div>
        </div>
    );
};

export default Adsense;
