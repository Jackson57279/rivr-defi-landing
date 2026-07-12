const LINK_GROUPS = [
  {
    title: 'Protocol',
    links: ['Overview', 'Tokenomics', 'Governance', 'Security'],
  },
  {
    title: 'Developers',
    links: ['Documentation', 'API', 'SDK', 'GitHub'],
  },
  {
    title: 'Community',
    links: ['Discord', 'Twitter', 'Forum', 'Blog'],
  },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(30,50,90,0.08)] bg-[#f0f0f0]">
      <div className="mx-auto flex w-full max-w-[1536px] flex-col gap-10 px-6 py-12 md:flex-row md:justify-between md:px-10 md:py-16">
        <div className="max-w-sm">
          <span className="text-2xl font-normal tracking-tight text-[rgba(30,50,90,0.95)]">
            RIVR
          </span>
          <p className="mt-4 text-sm leading-relaxed text-[rgba(30,50,90,0.55)]">
            Fluid staking infrastructure for composable yield, real-time liquidity, and
            cross-chain capital efficiency.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-xs font-normal tracking-wider text-[rgba(30,50,90,0.45)] uppercase">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[rgba(30,50,90,0.55)] transition hover:text-[rgba(30,50,90,0.95)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
