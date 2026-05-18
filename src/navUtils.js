/** In-app link target for sections on the home page (fixed header needs scroll-margin on those sections). */
export function homeSectionHash(sectionId) {
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId
  return { pathname: '/', hash: `#${id}` }
}

export function scrollToHomeSection(sectionId) {
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}

/** Retry scroll until the home page section is in the DOM (route + paint). */
export function scheduleScrollToHomeSection(sectionId) {
  const delays = [0, 50, 150, 350, 600]
  const timers = delays.map((ms) => window.setTimeout(() => scrollToHomeSection(sectionId), ms))
  return () => timers.forEach((id) => window.clearTimeout(id))
}
