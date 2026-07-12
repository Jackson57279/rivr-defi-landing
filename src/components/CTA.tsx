import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const CTA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4'

export default function CTA() {
  return (
    <section className="flex w-full items-center justify-center bg-[#f0f0f0] p-3 md:p-5">
      <div className="relative flex h-[min(90vh,720px)] w-full max-w-[1536px] items-center justify-center overflow-hidden rounded-[1.5rem] md:rounded-[3rem]">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={CTA_VIDEO}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 flex max-w-2xl flex-col items-center px-6 text-center text-white"
        >
          <h2 className="text-4xl font-normal tracking-tight md:text-6xl lg:text-7xl">
            Melt rigid assets into fluid yield.
          </h2>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-normal text-[rgba(30,50,90,0.95)]"
            >
              Launch App
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(30,50,90,0.08)]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-normal backdrop-blur-md"
            >
              Read Docs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
