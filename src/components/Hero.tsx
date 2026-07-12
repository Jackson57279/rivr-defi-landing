import { motion } from 'framer-motion'
import BottomLeftCard from './BottomLeftCard'
import BottomRightCorner from './BottomRightCorner'
import HeroBadge from './HeroBadge'
import Navbar from './Navbar'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4'

export default function Hero() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#f0f0f0] p-3 md:p-5">
      <section className="group relative flex h-full w-full max-w-[1536px] flex-col items-center overflow-hidden rounded-[1.5rem] md:rounded-[3rem]">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={HERO_VIDEO}
          className="absolute inset-0 z-0 h-full w-full object-cover object-[65%] lg:object-center"
        />

        <div className="relative z-10 flex h-full w-full flex-col items-center">
          <Navbar />

          <div className="flex w-full max-w-4xl flex-col items-center px-6 pt-8 text-center">
            <HeroBadge />

            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-2 text-4xl font-normal tracking-tight text-[#5E6470] sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.05]"
            >
              Fluid Asset Streams
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-sm font-normal leading-relaxed text-[#5E6470] opacity-80 sm:text-base md:text-lg"
            >
              Access Smart Vaults, stake RIVR, NFTs, transform rigid holdings into liquid
              cash instantly.
            </motion.p>
          </div>

          <BottomLeftCard />
          <BottomRightCorner />
        </div>
      </section>
    </div>
  )
}
