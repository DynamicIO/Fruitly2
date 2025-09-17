import { motion } from 'framer-motion'

export default function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const phone = String(formData.get('phone') || '')
    const message = String(formData.get('message') || '')
    // For now, simulate sending by opening the dialer and showing a message
    alert('Thanks! We\'ll call you back shortly.')
    window.location.href = `tel:01014636949`
    console.log({ name, phone, message })
    form.reset()
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">For orders: <a className="text-fruitly-primary font-semibold" href="tel:01014636949">01014636949</a></p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.instagram.com/fruitly_juice/?hl=en" target="_blank" rel="noreferrer" className="inline-flex rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 font-semibold hover:bg-white/70 dark:hover:bg-zinc-800/60">Instagram</a>
              <a href="https://www.facebook.com/FruitlyJuices/" target="_blank" rel="noreferrer" className="inline-flex rounded-lg border border-zinc-300 dark:border-zinc-700 px-4 py-2 font-semibold hover:bg-white/70 dark:hover:bg-zinc-800/60">Facebook</a>
            </div>
          </div>
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 bg-white/70 dark:bg-zinc-900/60 shadow-soft"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="name">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fruitly-primary" />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" required className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fruitly-primary" />
              </div>
              <div>
                <label className="text-sm font-medium" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fruitly-primary" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center rounded-xl bg-fruitly-primary px-6 py-3 text-white font-semibold shadow-soft hover:opacity-90">Send</button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

