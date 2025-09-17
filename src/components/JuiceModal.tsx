import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { MenuItem } from '../data/menu'

type JuiceModalProps = {
  item: MenuItem | null
  onClose: () => void
}

export default function JuiceModal({ item, onClose }: JuiceModalProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="absolute inset-0 flex items-end sm:items-center justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="w-full sm:max-w-md mx-4 sm:mx-0 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-soft">
              <div className="relative">
                <img src={item.imageUrl} alt={item.name} className="h-48 w-full object-cover" />
                <button
                  aria-label="Close"
                  onClick={onClose}
                  className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-zinc-900/80 p-2 hover:bg-white dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{item.description}</p>
                <div className="mt-4 flex gap-2">
                  <a href="#contact" className="inline-flex rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-semibold hover:bg-white/70 dark:hover:bg-zinc-800/60">Ask about ingredients</a>
                  <a href="tel:01014636949" className="inline-flex rounded-lg bg-fruitly-primary px-4 py-2 text-white text-sm font-semibold hover:opacity-90">Order now</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


