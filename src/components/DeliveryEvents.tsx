import { motion } from 'framer-motion'
import { CalendarDays, Truck } from 'lucide-react'

export default function DeliveryEvents() {
  return (
    <section id="delivery" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 bg-white/70 dark:bg-zinc-900/60 shadow-soft"
          >
            <div className="flex items-center gap-3">
              <Truck className="h-6 w-6 text-fruitly-primary" />
              <h3 className="text-xl font-semibold">We Deliver</h3>
            </div>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Fresh juices delivered to your door. Order by phone and we\'ll handle the rest.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 bg-white/70 dark:bg-zinc-900/60 shadow-soft"
          >
            <div className="flex items-center gap-3">
              <CalendarDays className="h-6 w-6 text-fruitly-primary" />
              <h3 className="text-xl font-semibold">Events & Occasions</h3>
            </div>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">Book Fruitly for your events and occasions. We bring the freshness to your gathering.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

