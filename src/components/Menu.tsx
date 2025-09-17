import { useState } from 'react'
import { motion } from 'framer-motion'
import { menu, type MenuItem } from '../data/menu'
import JuiceModal from './JuiceModal'

export default function Menu() {
  const [active, setActive] = useState<MenuItem | null>(null)
  return (
    <section id="menu" className="relative py-20 md:py-28 bg-gradient-to-b from-transparent to-white/60 dark:to-zinc-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold">Menu</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">All juices are freshly squeezed</p>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {menu.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="group rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 shadow-soft hover:shadow-lg"
              onClick={() => setActive(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                loading="lazy"
                className="h-32 sm:h-40 w-full object-cover group-hover:scale-[1.02] transition-transform"
              />
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold">{item.name}</h3>
              </div>
            </motion.article>
          ))}
        </div>
        <JuiceModal item={active} onClose={() => setActive(null)} />
      </div>
    </section>
  )
}

