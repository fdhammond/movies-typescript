import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function NavbarMovie() {
  const [stickyNav, setStickyNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 10) {
        setStickyNav(true)
      } else {
        setStickyNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuItems = [
    { name: 'Home', url: '/' },
    { name: 'Pages', url: '/' },
    { name: 'Movies', url: '/' },
    { name: 'TV Shows', url: '/' },
    { name: 'Celebs', url: '/' },
    { name: 'Blog', url: '/' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`h-32 px-28 flex justify-center align-center py-6 ${
        stickyNav ? 'sticky top-0 bg-white left-0 right-0' : ''
      }`}
    >
      <ul className={`flex w-full md:flex-row flex-col justify-center align-center self-center text-white ${stickyNav ? 'text-black' : ''}`}>
        {stickyNav ? (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: stickyNav ? 1 : 0.3 },
            }}
          >
            <a href="/" className="text-3xl font-bold ml-8 text-black">
              Movies
            </a>
          </motion.li>
        ) : (
          <li>
            <a href="/" className="text-3xl font-bold ml-8">
              Movies
            </a>
          </li>
        )}
        <div className="flex ml-auto md:flex-row flex-col justify-center align-center self-center">
          {stickyNav &&
            menuItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1 + 1 },
                }}
                className={`px-4 ${stickyNav ? 'text-black' : ''}`}
              >
                <a href={item.url}>{item.name}</a>
              </motion.li>
            ))}
          {!stickyNav &&
            menuItems.map((item, index) => (
              <li key={index} className="px-4">
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
        </div>
      </ul>
      {/* add border line down here */}
      <div className="border-t border-solid border-gray-500 mt-4 opacity-30"></div>
    </motion.nav>
  )
}
