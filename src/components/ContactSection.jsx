import { BRAND, images } from '../content'
import { ContactChannels, ContactChannelsLight } from './ContactChannels'

export function ContactSection({ t }) {
  return (
    <section id="contact" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-amber-950 via-stone-900 to-stone-950 text-white shadow-2xl shadow-amber-950/15 ring-1 ring-white/10 lg:grid-cols-2 lg:rounded-4xl">
        <div className="p-5 sm:p-8 lg:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-amber-200/90 sm:text-sm sm:tracking-[0.35em]">{t.nav[3]}</p>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{t.contactTitle}</h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/75">{t.contactText}</p>
          <ContactChannels t={t} className="mt-8" />
          <div className="mt-8 space-y-4">
            <ContactLine label={t.phoneHeading} value={t.phone} href={`tel:${t.phone.replace(/\s+/g, '')}`} />
            <ContactLine label={t.emailLabel} value={t.email} href={`mailto:${t.email}`} />
          </div>
        </div>
        <div className="flex min-h-72 flex-col items-center justify-center gap-6 bg-stone-950/50 p-6 ring-1 ring-white/5 sm:min-h-80 sm:gap-8 sm:p-8">
          <img src={images.logo} alt={`${BRAND.name} — ${BRAND.tagline}`} className="h-16 w-auto opacity-90 sm:h-20" />
          <p className="max-w-sm text-center font-serif text-2xl italic leading-snug text-amber-100/95 sm:text-3xl">{t.footer}</p>
          <ContactChannelsLight t={t} />
        </div>
      </div>
    </section>
  )
}

function ContactLine({ label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="block rounded-3xl bg-white/10 p-5 ring-1 ring-white/10 transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
    >
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200/90">{label}</span>
      <span className="mt-2 block text-lg font-semibold">{value}</span>
    </a>
  )
}
