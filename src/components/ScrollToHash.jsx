import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scheduleScrollToSection } from '../navUtils'

/**
 * Scrolls to the element matching location.hash after navigation.
 * React Router does not replicate the browser’s default fragment scroll for SPA navigations.
 */
export function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (!hash || hash === '#') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const id = hash.slice(1)
    if (!id) return

    return scheduleScrollToSection(id)
  }, [pathname, hash])

  return null
}
