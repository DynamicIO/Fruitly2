import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative pt-4 pb-20 md:pt-6 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">About Fruitly</h2>
            <p className="text-zinc-600 dark:text-zinc-300">
              Contact us for events & occasions. 100% freshly squeezed juices. We deliver!
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="tel:01014636949" className="inline-flex rounded-lg bg-fruitly-primary px-5 py-2.5 text-white font-semibold shadow-soft hover:opacity-90">Order Now</a>
              <a href="https://www.instagram.com/fruitly_juice/?hl=en" target="_blank" rel="noreferrer" className="inline-flex rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 font-semibold hover:bg-white/70 dark:hover:bg-zinc-800/60">Instagram</a>
              <a href="https://www.facebook.com/FruitlyJuices/" target="_blank" rel="noreferrer" className="inline-flex rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 font-semibold hover:bg-white/70 dark:hover:bg-zinc-800/60">Facebook</a>
            </div>
          </motion.div>
        </div>
        <div className="mt-4">
          <Certifications />
        </div>
      </div>
    </section>
  )
}

import IsoLogo from './ISO logo.png'
import HaccpLogo from './HACCP logo.png'
import InetLogo from './INET logo.png'
import Iso22000Logo from './22000-2018-1.png'
import FourSeasonsLogo from './Four_Seasons_logo.svg.png'
import HyattLogo from './Hyatt_Logo.png'
import RixosLogo from './Rixos_Hotels.svg.png'

function Certifications() {
  return (
    <div className="pt-0">
      <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 text-left">Certified & Trusted by</p>
      <div className="mt-1 flex flex-wrap items-center justify-center gap-6 sm:gap-8 px-2">
        <img src={IsoLogo} alt="ISO" className="h-24 sm:h-32 md:h-40 w-auto object-contain" />
        <img src={HaccpLogo} alt="HACCP" className="h-24 sm:h-32 md:h-40 w-auto object-contain scale-90" />
        <img src={InetLogo} alt="INET" className="h-24 sm:h-32 md:h-40 w-auto object-contain" />
        <img src={Iso22000Logo} alt="ISO 22000:2018" className="h-24 sm:h-32 md:h-40 w-auto object-contain" />
      </div>
      <div className="mt-4">
        <Partners />
      </div>
    </div>
  )
}

function Partners() {
  return (
    <div className="pt-0">
      <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400 text-left">Partners</p>
      <div className="mt-1 flex items-center justify-center gap-8">
        <img src={FourSeasonsLogo} alt="Four Seasons" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
        <img src={HyattLogo} alt="Hyatt" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
        <img src={RixosLogo} alt="Rixos Hotels" className="h-24 sm:h-40 md:h-56 w-auto object-contain" />
      </div>
    </div>
  )
}

