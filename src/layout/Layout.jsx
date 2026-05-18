import { Link, Outlet } from 'react-router-dom'
import { BRAND, images } from '../content'
import { useSite } from '../hooks/useSite'
import { HomeSectionLink } from '../components/HomeSectionLink'
import { IconMoon, IconSun } from '../components/Icons'
import { ScrollToHash } from '../components/ScrollToHash'

export function Layout() {
  const { t, setLanguage, isDark, setIsDark, menuOpen, setMenuOpen } = useSite()

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f0e6] text-stone-950 antialiased transition-colors duration-500 dark:bg-stone-950 dark:text-stone-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/75 text-white shadow-lg shadow-black/10 backdrop-blur-xl dark:bg-stone-950/85">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex min-h-11 items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
            aria-label="Home"
          >
            <img src={images.logo} alt={`${BRAND.name} — ${BRAND.tagline}`} className="h-9 w-auto sm:h-10 lg:h-11" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {[
              ['home', t.nav[0]],
              ['about', t.nav[1]],
              ['products', t.nav[2]],
              ['contact', t.nav[3]],
            ].map(([id, label]) => (
              <HomeSectionLink
                key={id}
                sectionId={id}
                className="rounded-full px-1 py-2 text-sm font-semibold text-white/75 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
              >
                {label}
              </HomeSectionLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => setIsDark((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/90 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
              aria-label={isDark ? t.themeAriaDark : t.themeAriaLight}
            >
              {isDark ? <IconMoon className="h-5 w-5" /> : <IconSun className="h-5 w-5" />}
            </button>
            <button
              type="button"
              onClick={() => setLanguage((value) => (value === 'sq' ? 'en' : 'sq'))}
              className="inline-flex h-11 items-center rounded-full bg-amber-500 px-4 text-sm font-bold text-stone-950 shadow-lg shadow-amber-950/20 transition hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
            >
              {t.language}
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className={`block h-0.5 w-6 rounded-full bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 rounded-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 rounded-full bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-navigation" className="border-t border-white/10 bg-stone-950/95 px-4 py-5 shadow-2xl shadow-black/30 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {[
                ['home', t.nav[0]],
                ['about', t.nav[1]],
                ['products', t.nav[2]],
                ['contact', t.nav[3]],
              ].map(([id, label]) => (
                <HomeSectionLink
                  key={id}
                  sectionId={id}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-white/85 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                >
                  {label}
                </HomeSectionLink>
              ))}
              <div className="flex gap-3 pt-3 sm:hidden">
                <button
                  type="button"
                  onClick={() => setIsDark((value) => !value)}
                  className="flex min-h-11 flex-1 items-center justify-center rounded-full border border-white/15 p-2.5 text-white/85 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
                  aria-label={isDark ? t.themeAriaDark : t.themeAriaLight}
                >
                  {isDark ? <IconMoon className="h-5 w-5" /> : <IconSun className="h-5 w-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage((value) => (value === 'sq' ? 'en' : 'sq'))}
                  className="min-h-11 flex-1 rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-stone-950 transition hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                >
                  {t.language}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <ScrollToHash />
      <Outlet />

      <footer className="border-t border-stone-200/80 bg-stone-900 px-4 py-8 text-center text-sm text-white/55 dark:border-white/10">
        <p>© 2026 {BRAND.name} · {BRAND.tagline}</p>
      </footer>
    </div>
  )
}
