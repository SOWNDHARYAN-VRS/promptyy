import { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: { [key: string]: unknown }[];
    }
}

const Adsense = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('Adsense error:', e);
        }
    }, []);

    return (
        <div className="w-full min-h-[250px]">
            <ins 
                className="adsbygoogle"
                style={{ 
                    display: 'block',
                    width: '100%',
                    minHeight: '250px'
                }}
                data-ad-client="ca-pub-7440197348376449"
                data-ad-slot="6945846286"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
};

export default Adsense;
