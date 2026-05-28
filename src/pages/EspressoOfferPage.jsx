import { images } from '../content'
import { ContactSection } from '../components/ContactSection'
import { HomeSectionLink } from '../components/HomeSectionLink'
import { useSite } from '../hooks/useSite'
import { scrollToSection } from '../navUtils'

export function EspressoOfferPage() {
  const { t } = useSite()
  const offer = t.espressoOfferPage

  return (
    <main className="pb-12">
      <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_32%),linear-gradient(to_bottom,rgba(120,53,15,0.08),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl">
          <HomeSectionLink
            sectionId="products"
            className="inline-flex min-h-10 items-center gap-2 rounded-full px-1 text-sm font-semibold text-amber-900 transition hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 dark:text-amber-300 dark:hover:text-amber-200"
          >
            <span aria-hidden>&larr;</span>
            {t.backToProducts}
          </HomeSectionLink>

          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-amber-700 sm:text-sm sm:tracking-[0.35em] dark:text-amber-400">
                {offer.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-50">
                {offer.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg dark:text-stone-300">{offer.intro}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex min-h-12 items-center rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-stone-950 shadow-lg shadow-amber-950/20 transition hover:-translate-y-0.5 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:text-base"
                >
                  {offer.primaryCta}
                </button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-[#f3ebe0]/85 p-3 shadow-xl shadow-amber-950/10 ring-1 ring-stone-200/50 sm:p-4 lg:rounded-4xl dark:border-white/10 dark:bg-stone-900/50 dark:ring-white/10">
              <img
                src={images.espressoOffer}
                alt="Venero espresso machine with pods and coffee box"
                className="w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-3xl border border-stone-200/80 bg-white/80 p-6 shadow-lg shadow-amber-950/5 ring-1 ring-amber-950/5 backdrop-blur-sm lg:rounded-4xl lg:p-8 dark:border-white/10 dark:bg-white/5 dark:ring-white/5">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-amber-700 sm:text-sm sm:tracking-[0.35em] dark:text-amber-400">
              {offer.monthlyPack}
            </p>
            <div className="mt-6 space-y-4">
              {offer.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl bg-amber-50/90 p-4 text-stone-800 ring-1 ring-amber-200/70 dark:bg-amber-500/10 dark:text-stone-100 dark:ring-amber-300/10"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-black text-stone-950">
                    ✓
                  </span>
                  <p className="text-sm font-semibold leading-7 sm:text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl bg-stone-950 p-6 text-white shadow-2xl shadow-amber-950/10 ring-1 ring-white/10 lg:rounded-4xl lg:p-8">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-amber-300 sm:text-sm sm:tracking-[0.35em]">
              {offer.audienceTitle}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{offer.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{offer.audienceText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {offer.audienceItems.map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-5 text-center font-bold uppercase tracking-[0.18em] text-amber-100"
                >
                  {label}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <ContactSection t={t} />
    </main>
  )
}
