import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/30 dark:border-white/10 glass dark:glass-dark shadow-soft">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-fruitly-primary text-white font-bold">F</span>
              <span className="text-lg font-semibold">Fruitly</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#about" className="hover:text-fruitly-primary">About</a>
              <a href="#menu" className="hover:text-fruitly-primary">Menu</a>
              <a href="#delivery" className="hover:text-fruitly-primary">Delivery & Events</a>
              <a href="#contact" className="hover:text-fruitly-primary">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <a href="tel:01014636949" className="hidden sm:inline-flex rounded-lg bg-fruitly-primary px-3 py-2 text-white text-sm font-semibold hover:opacity-90 shadow-soft">Contact: 01014636949</a>
              <ThemeToggle />
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/30 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 p-2 hover:bg-white/90 dark:hover:bg-zinc-800"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsOpen((v) => !v)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                id="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden border-t border-white/30 dark:border-white/10 px-4 py-3 flex flex-col gap-3"
              >
                <a href="#about" onClick={() => setIsOpen(false)} className="py-1 hover:text-fruitly-primary">About</a>
                <a href="#menu" onClick={() => setIsOpen(false)} className="py-1 hover:text-fruitly-primary">Menu</a>
                <a href="#delivery" onClick={() => setIsOpen(false)} className="py-1 hover:text-fruitly-primary">Delivery & Events</a>
                <a href="#contact" onClick={() => setIsOpen(false)} className="py-1 hover:text-fruitly-primary">Contact</a>
                <a href="tel:01014636949" className="mt-1 inline-flex rounded-lg bg-fruitly-primary px-3 py-2 text-white text-sm font-semibold hover:opacity-90 shadow-soft">Call: 01014636949</a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}

