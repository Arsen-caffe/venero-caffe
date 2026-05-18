import { Link, useLocation } from 'react-router-dom'
import { homeSectionHash, scheduleScrollToHomeSection } from '../navUtils'

export function HomeSectionLink({ sectionId, className, children, onClick, ...props }) {
  const location = useLocation()
  const target = homeSectionHash(sectionId)

  return (
    <Link
      to={target}
      className={className}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return

        const onHome = location.pathname === '/'
        const sameTarget = location.pathname === target.pathname && location.hash === target.hash

        if (onHome && sameTarget) {
          e.preventDefault()
          scheduleScrollToHomeSection(sectionId)
          return
        }

        if (onHome) {
          scheduleScrollToHomeSection(sectionId)
        }
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
