import { Link } from 'react-router-dom'
import { BRAND, categoryImage, footerCarouselImages, images } from '../content'
import { FooterImageCarousel } from '../components/FooterImageCarousel'
import { useSite } from '../hooks/useSite'
import { HomeSectionLink } from '../components/HomeSectionLink'
import { ContactChannels, ContactChannelsLight } from '../components/ContactChannels'

export function Home() {
  const { t } = useSite()

  return (
    <main>
      <section id="home" className="relative isolate min-h-dvh overflow-hidden pt-24 text-white sm:min-h-svh">
        <div className="pointer-events-none absolute inset-0 z-0 bg-stone-950" aria-hidden="true">
          <img
            src={images.hero}
            alt=""
            className="hero-photo absolute inset-x-0 top-0 z-0 h-auto w-full max-w-none sm:inset-0 sm:size-full sm:object-cover sm:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(12_10_9/0.9)_0%,rgb(12_10_9/0.65)_40%,rgb(12_10_9/0.2)_65%,transparent_85%),linear-gradient(to_top,rgb(12_10_9/0.92)_0%,rgb(12_10_9/0.5)_32%,transparent_58%)] sm:bg-linear-to-br sm:from-stone-950/92 sm:via-stone-900/70 sm:to-amber-950/55"></div>
        </div>
        <div className="absolute -right-24 bottom-10 z-0 hidden h-72 w-72 rounded-full bg-amber-500/20 blur-3xl lg:block"></div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] max-w-7xl items-center px-4 py-14 sm:min-h-[calc(100svh-6rem)] sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <img src={images.logo} alt={`${BRAND.name} — ${BRAND.tagline}`} className="mb-7 h-24 w-auto sm:h-36 lg:h-44" />
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-amber-300 sm:text-sm sm:tracking-[0.4em]">{t.heroEyebrow}</p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:mt-6 sm:text-xl sm:leading-8">{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <HomeSectionLink
                sectionId="contact"
                className="min-h-12 rounded-full bg-amber-500 px-7 py-3.5 text-center font-bold text-stone-950 shadow-2xl shadow-amber-950/35 transition hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 sm:px-8 sm:py-4"
              >
                {t.order}
              </HomeSectionLink>
              <HomeSectionLink
                sectionId="products"
                className="min-h-12 rounded-full border border-white/25 px-7 py-3.5 text-center font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 sm:px-8 sm:py-4"
              >
                {t.explore}
              </HomeSectionLink>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(225,29,36,0.10),transparent_42%),linear-gradient(to_bottom,rgba(255,255,255,0.65),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top,rgba(225,29,36,0.14),transparent_42%),linear-gradient(to_bottom,rgba(28,25,23,0.75),rgba(28,25,23,0))]"
        />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow={t.nav[2]} title={t.productsTitle} text={t.productsIntro} />

          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
            {t.categories.map((category) => (
              <Link
                key={category.slug}
                to={`/products/${category.slug}`}
                className="group block rounded-3xl border border-stone-200/80 bg-white/75 p-5 text-center shadow-lg shadow-amber-950/5 ring-1 ring-amber-950/5 backdrop-blur-sm transition hover:-translate-y-1.5 hover:bg-white/90 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:p-6 lg:rounded-4xl lg:p-8 dark:border-white/10 dark:bg-white/5 dark:ring-white/5 dark:hover:bg-white/10"
              >
                <img
                  src={categoryImage(category.slug)}
                  alt=""
                  className="mx-auto h-32 rounded-2xl object-contain transition duration-300 group-hover:scale-105 sm:h-36 lg:h-40"
                />
                <h3 className="mt-5 text-2xl font-black uppercase text-amber-900 sm:text-3xl dark:text-amber-200">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base dark:text-stone-300">{category.text}</p>
                <span className="mt-5 inline-flex min-h-10 items-center gap-1 rounded-full px-1 text-sm font-bold text-amber-700 dark:text-amber-400">
                  {t.viewRange}
                  <span aria-hidden className="transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-stone-950 px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-amber-300/90 sm:text-sm sm:tracking-[0.35em]">{BRAND.name}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{t.differenceTitle}</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/70 sm:mt-6">{t.differenceText}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-inner shadow-black/20 backdrop-blur-sm transition hover:bg-white/15 sm:p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300 sm:text-sm sm:tracking-[0.35em]">{value.title}</p>
                <p className="mt-4 text-sm leading-7 text-white/85 sm:text-base">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div
            className="rounded-3xl bg-cover bg-center p-4 text-white shadow-2xl ring-1 ring-stone-900/10 sm:p-8 lg:rounded-4xl"
            style={{ backgroundImage: `url(${images.beans})` }}
          >
            <div className="rounded-3xl bg-stone-950/78 p-5 ring-1 ring-white/10 backdrop-blur-sm sm:p-8">
              <img src={images.logo} alt={`${BRAND.name} — ${BRAND.tagline}`} className="h-14 w-auto sm:h-16" />
              <p className="mt-5 text-xl font-black">{t.aboutBrandLines[0]}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-white/70 sm:text-sm sm:tracking-[0.35em]">{t.aboutBrandLines[1]}</p>
              <p className="mt-5 max-w-sm text-base leading-8 text-white/80 sm:mt-6 sm:text-lg">{t.aboutBrandLines[2]}</p>
            </div>
          </div>
          <div>
            <SectionHeading align="left" eyebrow={t.nav[1]} title={t.aboutTitle} text={t.aboutText} />
            <div className="mt-7 space-y-5 text-sm text-stone-700 sm:mt-8 sm:space-y-6 sm:text-base dark:text-stone-300">
              {t.aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Product gallery" className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <FooterImageCarousel images={footerCarouselImages} />
      </section>

      <section id="contact" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-amber-950 via-stone-900 to-stone-950 text-white shadow-2xl shadow-amber-950/15 ring-1 ring-white/10 lg:grid-cols-2 lg:rounded-4xl">
          <div className="p-5 sm:p-8 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-amber-200/90 sm:text-sm sm:tracking-[0.35em]">{t.nav[3]}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{t.contactTitle}</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/75">{t.contactText}</p>
            <ContactChannels t={t} className="mt-8" />
            <div className="mt-8 space-y-4">
              <ContactLine label={t.phoneHeading} value={t.phone} href={`tel:${t.phone.replace(/\s+/g, '')}`} />
              <ContactLine label={t.emailLabel} value={t.email} href={`mailto:${t.email}`} />
            </div>
          </div>
          <div className="flex min-h-72 flex-col items-center justify-center gap-6 bg-stone-950/50 p-6 ring-1 ring-white/5 sm:min-h-80 sm:gap-8 sm:p-8">
            <img src={images.logo} alt={`${BRAND.name} — ${BRAND.tagline}`} className="h-16 w-auto opacity-90 sm:h-20" />
            <p className="max-w-sm text-center font-serif text-2xl italic leading-snug text-amber-100/95 sm:text-3xl">{t.footer}</p>
            <ContactChannelsLight t={t} />
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'mx-auto text-center'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-xs font-black uppercase tracking-[0.32em] text-amber-700 sm:text-sm sm:tracking-[0.35em] dark:text-amber-400">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-stone-900 sm:text-5xl dark:text-amber-50">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-stone-600 sm:text-lg dark:text-stone-300">{text}</p>}
    </div>
  )
}

function ContactLine({ label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="block rounded-3xl bg-white/10 p-5 ring-1 ring-white/10 transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
    >
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200/90">{label}</span>
      <span className="mt-2 block text-lg font-semibold">{value}</span>
    </a>
  )
}
