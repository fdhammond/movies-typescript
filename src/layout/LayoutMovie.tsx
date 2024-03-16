import { useEffect } from 'react';
import Footer from '../components/Footer';
import NavbarMovie from '../components/NavbarMovie';

export default function LayoutMovie({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-full w-full relative">
            <header className="sticky top-0 z-20">
                <NavbarMovie />
            </header>
            <div className='md:px-28 px-16'>
                <img src="/assets/images/mountain.webp" alt="" className='absolute top-0 left-0 w-full h-[650px] object-cover object-middle' style={{ filter: 'brightness(0.7)' }} />
                <main className='relative z-10'>{children}</main>
            </div>
            <footer className="bg-rgba-black-85 -mx-0">
                <div className='border-t border-solid border-gray-500 mt-4 opacity-30'></div>
                    <Footer />
            </footer>
        </div>
    );
}
