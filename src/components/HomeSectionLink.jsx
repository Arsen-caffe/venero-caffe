import { Link, useLocation } from 'react-router-dom'
import { homeSectionHash, scheduleScrollToSection } from '../navUtils'

export function HomeSectionLink({ sectionId, className, children, onClick, ...props }) {
  const location = useLocation()
  const onProductPage = /^\/products\/[^/]+$/.test(location.pathname)
  const target =
    onProductPage && sectionId === 'contact'
      ? { pathname: location.pathname, hash: '#contact' }
      : homeSectionHash(sectionId)

  return (
    <Link
      to={target}
      className={className}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return

        const samePath = location.pathname === target.pathname
        const sameHash = location.hash === target.hash

        if (samePath && sameHash) {
          e.preventDefault()
          scheduleScrollToSection(sectionId)
          return
        }

        if (samePath || target.pathname === '/') {
          scheduleScrollToSection(sectionId)
        }
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
