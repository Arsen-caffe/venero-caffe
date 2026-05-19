/** In-app link target for sections on the home page (fixed header needs scroll-margin on those sections). */
export function homeSectionHash(sectionId) {
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId
  return { pathname: '/', hash: `#${id}` }
}

export function scrollToSection(sectionId) {
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId
  const el = document.getElementById(id)
  if (!el) return false
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}

/** @deprecated Use scrollToSection */
export const scrollToHomeSection = scrollToSection

/** Retry scroll until the target section is in the DOM (route + paint). */
export function scheduleScrollToSection(sectionId) {
  const delays = [0, 50, 150, 350, 600]
  const timers = delays.map((ms) => window.setTimeout(() => scrollToSection(sectionId), ms))
  return () => timers.forEach((id) => window.clearTimeout(id))
}

/** @deprecated Use scheduleScrollToSection */
export const scheduleScrollToHomeSection = scheduleScrollToSection
