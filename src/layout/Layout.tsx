import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 660); // You can adjust the breakpoint as needed
  };

  useEffect(() => {
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  return (
    <div className="bg-rgba-black-85 md:px-28 px-16 h-full w-full">
      <header className="sticky top-0 z-10 md:-mx-28">
        {
          isMobile ? <NavbarMobile /> : <Navbar />
        }
      </header>
      <main>
        {children}
      </main>
      <footer className="md:-mx-28 border-t border-solid border-gray-500 mt-24 opacity-30">
        <Footer />
      </footer>
    </div>
  )
}
