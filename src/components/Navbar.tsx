import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const MENU_ITEMS = [
  { label: 'Ecosystem' },
  { label: 'Economics', hasDropdown: true },
  { label: 'Developers' },
  { label: 'Governance', hasDropdown: true },
] as const

export default function Navbar() {
  return (
    <nav className="relative z-10 flex w-full items-center justify-between px-6 py-6 md:px-10">
      <div className="hidden flex-1 md:block" />

      <ul className="hidden items-center gap-8 text-sm font-normal text-[rgb(45,45,45)] md:flex">
        {MENU_ITEMS.map((item) => (
          <li
            key={item.label}
            className="group flex cursor-pointer items-center gap-1 transition-opacity hover:opacity-70"
          >
            {item.label}
            {'hasDropdown' in item && item.hasDropdown && (
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <span className="text-xl font-normal tracking-tighter text-[rgba(30,50,90,0.9)]">
          RIVR
        </span>
      </div>

      <div className="flex flex-1 justify-end">
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-2 rounded-full bg-[rgba(30,50,90,0.8)] py-1.5 pr-4 pl-2 text-white transition-colors hover:bg-[rgba(30,50,90,1)] md:gap-3 md:py-2 md:pr-6"
        >
          <div className="flex items-center justify-center rounded-full bg-white/20 p-1 md:p-1.5">
            <ArrowUpRight className="h-4 w-4 text-white md:h-5 md:w-5" />
          </div>
          <span className="text-xs font-normal md:text-sm">Book Demo</span>
        </motion.button>
      </div>
    </nav>
  )
}
