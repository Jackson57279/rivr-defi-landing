import { Activity, ArrowUpRight, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section className="mx-auto w-full max-w-[1536px] px-3 py-6 md:px-5 md:py-12">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl text-3xl font-normal tracking-tight text-[rgba(30,50,90,0.95)] md:text-5xl"
        >
          Architected for high-performance DeFi
        </motion.h2>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="rounded-full border border-[rgba(30,50,90,0.15)] px-6 py-3 text-sm font-normal text-[rgba(30,50,90,0.9)] transition hover:bg-white"
        >
          Start Staking
        </motion.button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative min-h-[28rem] overflow-hidden rounded-[1.5rem] bg-white p-8 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:row-span-2 md:rounded-[2rem] md:p-10"
        >
          <Layers className="pointer-events-none absolute -right-8 -bottom-8 h-64 w-64 text-[rgba(30,50,90,1)] opacity-[0.02] transition-transform duration-700 group-hover:scale-110" />
          <h3 className="relative z-10 max-w-sm text-2xl font-normal leading-snug text-[rgba(30,50,90,0.95)] md:text-3xl">
            Unlock the liquidity of your staked assets
          </h3>
          <p className="relative z-10 mt-auto pt-32 text-sm text-[rgba(30,50,90,0.6)] md:absolute md:bottom-10 md:pt-0">
            Convert locked positions into composable yield streams without unwinding your core
            stake.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group relative overflow-hidden rounded-[1.5rem] bg-white p-8 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:col-span-2 md:rounded-[2rem] md:p-10"
        >
          <Activity className="pointer-events-none absolute -right-4 -bottom-4 h-48 w-48 text-[rgba(30,50,90,1)] opacity-[0.02] transition-transform duration-700 group-hover:scale-110" />
          <h3 className="text-2xl font-normal text-[rgba(30,50,90,0.95)] md:text-3xl">
            Real-time Yields
          </h3>
          <p className="mt-4 max-w-lg text-sm text-[rgba(30,50,90,0.6)]">
            Track accrual, rebalance vaults, and route capital with sub-second visibility across
            every position.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col justify-between overflow-hidden rounded-[1.5rem] bg-white p-8 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:rounded-[2rem]"
        >
          <div>
            <h3 className="text-xl font-normal text-[rgba(30,50,90,0.95)] md:text-2xl">
              Bank-grade
            </h3>
            <p className="mt-3 text-sm text-[rgba(30,50,90,0.6)]">
              Smart contracts audited by leading security firms with continuous monitoring.
            </p>
          </div>
          <button
            type="button"
            className="mt-8 w-fit rounded-full border border-[rgba(30,50,90,0.15)] px-5 py-2.5 text-sm text-[rgba(30,50,90,0.9)]"
          >
            View Audits
          </button>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center overflow-hidden rounded-[1.5rem] bg-white p-8 text-center transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:rounded-[2rem]"
        >
          <h3 className="text-xl font-normal text-[rgba(30,50,90,0.95)] md:text-2xl">
            Cross-Chain
          </h3>
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            className="mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(30,50,90,0.06)] text-[rgba(30,50,90,0.85)]"
          >
            <ArrowUpRight className="h-6 w-6" />
          </motion.button>
        </motion.article>
      </div>
    </section>
  )
}
