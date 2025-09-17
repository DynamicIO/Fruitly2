import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="hero-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-zinc-950/80 dark:via-zinc-950/40 dark:to-zinc-950/95" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10 md:pt-28 md:pb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            100% Freshly Squeezed Juices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-lg md:text-xl text-zinc-600 dark:text-zinc-300"
          >
            We deliver. Perfect for your day, events, and occasions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="tel:01014636949" className="inline-flex items-center rounded-xl bg-fruitly-primary px-6 py-3 text-white font-semibold shadow-soft hover:opacity-90">Call us</a>
            <a href="#menu" className="inline-flex items-center rounded-xl border border-zinc-300 dark:border-zinc-700 px-6 py-3 font-semibold hover:bg-white/70 dark:hover:bg-zinc-800/60">Browse Menu</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

