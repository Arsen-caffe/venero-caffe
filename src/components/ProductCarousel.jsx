import { useCallback, useEffect, useRef, useState } from 'react'
import { IconChevronLeft, IconChevronRight } from './Icons'

export function ProductCarousel({ children, hint, className = '', fadeClass = 'from-[#fbf4ea] dark:from-stone-950' }) {
  const scrollerRef = useRef(null)
  const [state, setState] = useState({ left: false, right: true })

  const update = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setState({
      left: el.scrollLeft > 4,
      right: max > 4 && el.scrollLeft < max - 4,
    })
  }, [])

  useEffect(() => {
    update()
    const el = scrollerRef.current
    if (!el) return
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [update, children])

  const scrollBy = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * Math.min(340, el.clientWidth * 0.85), behavior: 'smooth' })
  }

  return (
    <div className={`relative ${className}`}>
      <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r sm:w-14 ${fadeClass} to-transparent`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l sm:w-14 ${fadeClass} to-transparent`} />
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollBy(-1)}
        className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200/80 bg-white/95 text-stone-800 shadow-lg backdrop-blur-sm transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:flex dark:border-white/15 dark:bg-stone-900/90 dark:text-stone-100 dark:hover:bg-stone-800 disabled:pointer-events-none disabled:opacity-25"
        disabled={!state.left}
      >
        <IconChevronLeft />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollBy(1)}
        className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-stone-200/80 bg-white/95 text-stone-800 shadow-lg backdrop-blur-sm transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 sm:flex dark:border-white/15 dark:bg-stone-900/90 dark:text-stone-100 dark:hover:bg-stone-800 disabled:pointer-events-none disabled:opacity-25"
        disabled={!state.right}
      >
        <IconChevronRight />
      </button>
      <div
        ref={scrollerRef}
        className="flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 sm:px-2 [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      {hint ? <p className="mt-2 text-center text-xs font-medium text-stone-500 dark:text-stone-400 md:hidden">{hint}</p> : null}
    </div>
  )
}
