import { useCallback, useEffect, useRef, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from './Icons'

const GAP_PX = 20
const AUTOPLAY_MS = 3000
const TRANSITION_MS = 600

function getSlidesPerView() {
  const w = window.innerWidth
  if (w < 480) return 2
  if (w < 736) return 3
  if (w < 1024) return 4
  return 5
}

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView)

  useEffect(() => {
    const onResize = () => setSlidesPerView(getSlidesPerView())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return slidesPerView
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return prefersReducedMotion
}

export function FooterImageCarousel({ images }) {
  const slidesPerView = useSlidesPerView()
  const prefersReducedMotion = usePrefersReducedMotion()
  const viewportRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [stepPx, setStepPx] = useState(0)

  const maxIndex = Math.max(0, images.length - slidesPerView)
  const canScroll = images.length > slidesPerView

  const measure = useCallback(() => {
    const slide = viewportRef.current?.querySelector('[data-carousel-slide]')
    if (!slide) return
    setStepPx(slide.getBoundingClientRect().width + GAP_PX)
  }, [])

  useEffect(() => {
    measure()
    const el = viewportRef.current
    if (!el) return
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [measure, slidesPerView, images.length])

  const goNext = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1))
  }, [maxIndex])

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1))
  }, [maxIndex])

  useEffect(() => {
    if (!canScroll || prefersReducedMotion) return
    const id = window.setInterval(goNext, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [canScroll, prefersReducedMotion, goNext])

  const visibleIndex = Math.min(index, maxIndex)

  return (
    <div className="relative w-full" aria-roledescription="carousel">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {canScroll && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goPrev}
              className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200/90 bg-white/95 text-stone-800 shadow-md transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:left-2 dark:border-white/15 dark:bg-stone-900/95 dark:text-stone-100 dark:hover:bg-stone-800"
            >
              <IconChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goNext}
              className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200/90 bg-white/95 text-stone-800 shadow-md transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:right-2 dark:border-white/15 dark:bg-stone-900/95 dark:text-stone-100 dark:hover:bg-stone-800"
            >
              <IconChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        <div ref={viewportRef} className="overflow-hidden px-8 sm:px-12">
          <div
            className="flex ease-out will-change-transform"
            style={{
              gap: GAP_PX,
              transform: `translate3d(-${visibleIndex * stepPx}px, 0, 0)`,
              transitionDuration: prefersReducedMotion ? '0ms' : `${TRANSITION_MS}ms`,
              transitionProperty: 'transform',
            }}
          >
            {images.map((src) => (
              <div
                key={src}
                data-carousel-slide
                className="flex h-[270px] w-[160px] shrink-0 flex-col items-center justify-center rounded-2xl border border-stone-300/30 bg-[#f3ebe0]/70 p-3.5 shadow-sm ring-1 ring-stone-300/20 sm:h-[300px] sm:w-[184px] dark:border-white/5 dark:bg-stone-900/35 dark:ring-white/5"
              >
                <img
                  src={src}
                  alt=""
                  width={160}
                  height={240}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[210px] w-auto max-w-full rounded-xl object-contain sm:max-h-[240px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
