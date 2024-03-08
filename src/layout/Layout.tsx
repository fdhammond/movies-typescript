import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-rgba-black-85 md:px-28 px-16 h-full w-full">
      <header className="sticky top-0 z-10 -mx-28">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="-mx-28 border-t border-solid border-gray-500 mt-24 opacity-30">
        <Footer />
      </footer>
    </div>
  )
}
