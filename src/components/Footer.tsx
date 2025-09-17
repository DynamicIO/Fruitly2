export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-6">
          <p className="text-sm">© {new Date().getFullYear()} Fruitly. All rights reserved.</p>
          <div className="text-sm">Order: <a href="tel:01014636949" className="font-semibold text-fruitly-primary">01014636949</a></div>
        </div>
      </div>
    </footer>
  )
}

