import { useEffect, useMemo, useState } from 'react'
import { copy } from '../content'
import { SiteContext } from './site-context'

export function SiteProvider({ children }) {
  const [language, setLanguage] = useState('sq')
  const [isDark, setIsDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const t = copy[language]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isDark,
      setIsDark,
      menuOpen,
      setMenuOpen,
      t,
    }),
    [language, isDark, menuOpen, t],
  )

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}
