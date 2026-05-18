import { CONTACT_LINKS } from '../content'
import { IconInstagram, IconPhone, IconWhatsApp } from './Icons'

export function ContactChannels({ t, className = '' }) {
  return (
    <div
      className={`grid gap-3 min-[420px]:grid-cols-3 sm:flex sm:flex-wrap ${className}`}
      role="group"
      aria-label={t.contactChannelsAria}
    >
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#128C7E]/15 px-4 py-3 text-sm font-bold text-[#075E54] ring-1 ring-[#128C7E]/25 transition hover:bg-[#128C7E]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-200 dark:ring-emerald-400/30 dark:hover:bg-emerald-500/25"
      >
        <IconWhatsApp className="h-5 w-5" />
        {t.whatsappLabel}
      </a>
      <a
        href={CONTACT_LINKS.phone}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white/15 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/25 transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
      >
        <IconPhone className="h-5 w-5" />
        {t.phoneLabel}
      </a>
      <a
        href={CONTACT_LINKS.instagram}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-fuchsia-500/15 px-4 py-3 text-sm font-bold text-fuchsia-50 ring-1 ring-fuchsia-300/30 transition hover:bg-fuchsia-500/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-200"
      >
        <IconInstagram className="h-5 w-5" />
        {t.instagramLabel}
      </a>
    </div>
  )
}

export function ContactChannelsLight({ t, className = '' }) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-3 ${className}`}
      role="group"
      aria-label={t.contactChannelsAria}
    >
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#128C7E]/12 text-[#065f46] ring-1 ring-[#128C7E]/20 transition hover:bg-[#128C7E]/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300 dark:bg-emerald-500/15 dark:text-emerald-200 dark:ring-emerald-400/25"
        aria-label={t.whatsappLabel}
      >
        <IconWhatsApp className="h-6 w-6" />
      </a>
      <a
        href={CONTACT_LINKS.phone}
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-200/80 text-stone-900 ring-1 ring-stone-300/80 transition hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 dark:bg-white/10 dark:text-white dark:ring-white/15 dark:hover:bg-white/15"
        aria-label={t.phoneLabel}
      >
        <IconPhone className="h-6 w-6" />
      </a>
      <a
        href={CONTACT_LINKS.instagram}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/12 text-fuchsia-700 ring-1 ring-fuchsia-500/20 transition hover:bg-fuchsia-500/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300 dark:bg-fuchsia-400/15 dark:text-fuchsia-100 dark:ring-fuchsia-300/30"
        aria-label={t.instagramLabel}
      >
        <IconInstagram className="h-6 w-6" />
      </a>
    </div>
  )
}
