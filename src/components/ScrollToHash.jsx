import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scheduleScrollToHomeSection } from '../navUtils'

/**
 * Scrolls to the element matching location.hash when the home page is shown.
 * React Router does not replicate the browser’s default fragment scroll for SPA navigations.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (pathname !== '/') {
      if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    if (!hash || hash === '#') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const id = hash.slice(1)
    if (!id) return

    return scheduleScrollToHomeSection(id)
  }, [pathname, hash])

  return null
}
