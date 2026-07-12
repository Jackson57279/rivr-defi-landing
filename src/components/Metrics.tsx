import { motion } from 'framer-motion'

const METRICS = [
  { value: '$2.4B', label: 'Total Value Locked' },
  { value: '8.5%', label: 'Average Realized Yield' },
  { value: '140K+', label: 'Active Participants' },
  { value: '< 2s', label: 'Finality Engine' },
] as const

export default function Metrics() {
  return (
    <section className="mx-auto w-full max-w-[1536px] px-3 py-6 md:px-5 md:py-12">
      <div className="rounded-[1.5rem] border border-[rgba(30,50,90,0.05)] bg-[rgba(30,50,90,0.02)] p-8 md:rounded-[3rem] md:p-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col gap-2 px-4 py-6 md:py-0 md:pr-8 ${
                index < 2 ? 'border-b border-[rgba(30,50,90,0.1)] md:border-b-0' : ''
              } ${index % 2 === 0 ? 'border-r border-[rgba(30,50,90,0.1)] md:border-r' : ''} ${
                index < 3 ? 'md:border-r md:border-[rgba(30,50,90,0.1)]' : ''
              }`}
            >
              <span className="text-3xl font-normal tracking-tight text-[rgba(30,50,90,0.95)] md:text-5xl">
                {metric.value}
              </span>
              <span className="text-xs font-normal text-[rgba(30,50,90,0.55)] md:text-sm">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
