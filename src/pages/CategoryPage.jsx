import { Navigate, useParams } from 'react-router-dom'
import { CATEGORY_SLUGS, categoryImage, categoryVideos, resolveImage } from '../content'
import { useSite } from '../hooks/useSite'
import { HomeSectionLink } from '../components/HomeSectionLink'
import { ContactChannelsLight } from '../components/ContactChannels'
import { ProductCarousel } from '../components/ProductCarousel'

export function CategoryPage() {
  const { category } = useParams()
  const { t } = useSite()

  if (!CATEGORY_SLUGS.includes(category)) {
    return <Navigate to="/" replace />
  }

  const meta = t.categoryPages[category]
  const items = t.catalog[category]
  const cat = t.categories.find((c) => c.slug === category)
  const heroImg = categoryImage(category)
  const video = categoryVideos[category]

  return (
    <main className="pb-12">
      <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
        <div className="absolute inset-0 bg-linear-to-b from-amber-200/25 via-transparent to-transparent dark:from-amber-900/25" />
        <div className="relative mx-auto max-w-7xl">
          <HomeSectionLink
            sectionId="products"
            className="inline-flex min-h-10 items-center gap-2 rounded-full px-1 text-sm font-semibold text-amber-900 transition hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 dark:text-amber-300 dark:hover:text-amber-200"
          >
            <span aria-hidden>←</span>
            {t.backToProducts}
          </HomeSectionLink>
          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-amber-700 sm:text-sm sm:tracking-[0.35em] dark:text-amber-400">{cat?.title}</p>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-50">
                {meta.headline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-stone-600 sm:text-lg dark:text-stone-300">{meta.sub}</p>
              <ContactChannelsLight t={t} className="mt-8 justify-start" />
            </div>
            <div className="rounded-3xl border border-stone-200/70 bg-[#f3ebe0]/85 p-5 shadow-xl shadow-amber-950/10 ring-1 ring-stone-200/50 sm:p-8 lg:rounded-4xl dark:border-white/10 dark:bg-stone-900/50 dark:ring-white/10">
              <img src={heroImg} alt="" className="mx-auto h-44 rounded-2xl object-contain sm:h-56 lg:h-64" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {video && (
            <div className="mb-10 max-w-4xl sm:mb-12">
              <div className="overflow-hidden rounded-3xl border border-stone-200/90 bg-stone-950 shadow-2xl shadow-amber-950/10 ring-1 ring-stone-900/10 lg:rounded-4xl dark:border-white/10">
                <video
                  className="aspect-video w-full bg-stone-950 object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </div>
            </div>
          )}

          <h2 className="text-2xl font-black text-stone-900 sm:text-3xl dark:text-stone-100">{t.productsTitle}</h2>
          <ProductCarousel hint={t.carouselHint} className="mt-8" fadeClass="from-[#f7f0e6] dark:from-stone-950">
            {items.map((product, index) => (
              <article
                key={`${product.name}-${product.imageKey}-${index}`}
                className="w-[min(82vw,250px)] shrink-0 snap-start rounded-3xl border border-stone-200/80 bg-white/85 p-5 text-center shadow-lg shadow-amber-950/10 ring-1 ring-amber-950/5 backdrop-blur-sm sm:w-[270px] sm:p-6 dark:border-white/10 dark:bg-white/5 dark:ring-white/5"
              >
                <img src={resolveImage(product.imageKey)} alt="" className="mx-auto h-40 rounded-2xl object-contain sm:h-48" />
                <h3 className="mt-4 text-base font-black uppercase text-amber-900 sm:text-lg dark:text-amber-100">{product.name}</h3>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">{product.detail}</p>
                <p className="mt-3 text-lg font-black text-amber-700 dark:text-amber-300">{product.price}</p>
              </article>
            ))}
          </ProductCarousel>
        </div>
      </section>
    </main>
  )
}
