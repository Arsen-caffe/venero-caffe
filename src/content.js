/** Venero — brand assets live under /public/images */
export const BRAND = {
  name: 'Venero',
  tagline: 'Il caffe che ami',
  primaryHex: '#E31E24',
}

const product = (file) => `/images/products/${file}`

export const images = {
  logo: '/images/venero-logo-on-dark.png',
  logoOnLight: '/images/venero-logo-on-light.png',
  logoOnRed: '/images/venero-logo-on-red.png',
  hero: '/images/venero-hero.png',
  beans: '/images/venero-beans.png',
  home: product('coffe-1.png'),
  bar: product('coffe-2.png'),
  office: product('product-office-pods.png'),
  coffe1: product('coffe-1.png'),
  coffe2: product('coffe-2.png'),
  bagGold: product('product-bag-gold.png'),
  bagBlack: product('product-bag-black.png'),
  capsuleBlue: product('product-capsule-blue.png'),
  capsulesSachet: product('product-capsules-sachet.png'),
  podEse: product('product-pod-ese.png'),
  podsBox: product('product-pods-box.png'),
  homeMachine: product('product-home-machine.png'),
  homePodBrew: product('product-home-pod-brew.png'),
  machinesAroma: product('product-machines-aroma.png'),
  espressoCup: product('product-espresso-cup.png'),
  officeMachine: product('product-office-machine.png'),
  carouselBubu: product('carousel-bubu-machine.png'),
  carouselFrog: product('carousel-frog-machine.png'),
  carouselEspressoBox: product('carousel-espresso-box.png'),
  carouselPodsHands: product('carousel-pods-hands.png'),
}

export const videos = [
  {
    src: '/videos/venero-showcase-1.mp4',
    poster: images.homeMachine,
  },
  {
    src: '/videos/venero-showcase-2.mp4',
    poster: images.espressoCup,
  },
]

export const categoryVideos = {
  home: videos[0],
  office: videos[0],
  bar: videos[1],
}

export function categoryImage(slug) {
  if (slug === 'bar') return images.coffe2
  if (slug === 'office') return images.office
  return images.coffe1
}

export const footerCarouselImages = [
  images.capsulesSachet,
  images.podsBox,
  images.homeMachine,
  images.homePodBrew,
  images.machinesAroma,
  images.espressoCup,
  images.officeMachine,
  images.office,
  images.carouselBubu,
  images.carouselFrog,
  images.carouselEspressoBox,
  images.carouselPodsHands,
]

/** Update these URLs to match your real channels */
export const CONTACT_LINKS = {
  whatsapp: 'https://wa.me/355696044334',
  phone: 'tel:+355696044334',
  instagram:
    'https://www.instagram.com/venerocaffealbania?igsh=a2c4aGlhbTl1amlp&utm_source=qr',
}

export const CATEGORY_SLUGS = ['home', 'bar', 'office']

export const copy = {
  sq: {
    nav: ['Kreu', 'Rreth Nesh', 'Produkte', 'Kontakt'],
    productsMenu: ['Shtëpi', 'Bar', 'Zyrë'],
    themeAriaLight: 'Aktivizo modalitetin e errët',
    themeAriaDark: 'Aktivizo modalitetin e dritës',
    language: 'EN',
    heroEyebrow: 'Venero Caffe',
    heroTitle: 'Tradita italiane në çdo filxhan.',
    heroText:
      'Çdo arritje nis me frymëzimin e duhur dhe një kafe të mirë pranë jush. Ne jemi këtu për t’ju shoqëruar në çdo fillim të ri.',
    order: 'Niseni sot këtë eksperiencë.',
    explore: 'Produktet Venero',
    productsTitle: 'PRODUKTET TONA',
    productsIntro:
      'Kafeja është pjesë e momenteve të përditshme, duke ju dhënë energji për sfidat e ditës dhe duke i kthyer takimet e zakonshme në çaste të veçanta. Venero Caffe angazhohet që çdo filxhan të sjellë kënaqësi dhe ta bëjë çdo moment unik, kudo që ndodheni.',
    categories: [
      {
        slug: 'home',
        title: 'Shtëpi',
        text: 'Për të gjithë ata që e shijojnë kafen si një çast të veçantë, për t’u ndarë me njerëzit më të dashur.',
      },
      {
        slug: 'bar',
        title: 'Bar',
        text: 'Për ata që e shohin kafenë si një çast me vlerë, që mbetet gjithmonë në kujtesë.',
      },
      {
        slug: 'office',
        title: 'Zyrë',
        text: 'Dedikuar atyre që japin më të mirën në çdo sfidë të punës, por vetëm pasi kanë shijuar një kafe të mirë!',
      },
    ],
    featuredTitle: 'Produktet Venero',
    featuredText:
      'Të zgjedhësh Venero Caffe do të thotë të kesh pranë një ekip me eksperiencë dhe përkushtim profesional. Ne sjellim jo vetëm kafe me cilësi të lartë, por edhe një mbështetje të dedikuar për çdo biznes që shërben dhjetëra apo qindra filxhanë çdo ditë.',
    carouselHint: 'Rrëshqit për më shumë',
    viewRange: 'Shiko gamën',
    backToProducts: 'Kthehu te produktet',
    categoryPages: {
      home: {
        headline: 'Shtëpi',
        sub: 'Për të gjithë ata që e shijojnë kafen si një çast të veçantë, për t’u ndarë me njerëzit më të dashur.',
      },
      bar: {
        headline: 'Bar',
        sub: 'Për ata që e shohin kafenë si një çast me vlerë, që mbetet gjithmonë në kujtesë.',
      },
      office: {
        headline: 'Zyrë',
        sub: 'Dedikuar atyre që japin më të mirën në çdo sfidë të punës, por vetëm pasi kanë shijuar një kafe të mirë!',
      },
    },
    catalog: {
      home: [
        { name: 'Espresso in Capsule', detail: 'Kapsula Point Pako me 100 kapsula + set (gota sheqer dhe përzierës)', price: 'Porosite tani', imageKey: 'capsuleBlue' },
        { name: 'Espresso In Cialde', detail: 'Bustina Cialde per sistemet PODS Pako me 150 bustina + set (gota sheqer dhe përzierës)', price: 'Porosite tani', imageKey: 'podEse' },
      ],
      bar: [
        { name: 'Italian Blend Intenso', detail: 'Blend për volum të lartë', price: 'Porosite tani', imageKey: 'bagBlack' },
        { name: 'Italian Blend Coffee', detail: 'Blend i balancuar për ekipin', price: 'Porosite tani', imageKey: 'bagGold' },
      ],
      office: [
        { name: 'Espresso in Capsule', detail: 'Kapsula Point Pako me 100 kapsula + set (gota sheqer dhe përzierës)', price: 'Porosite tani', imageKey: 'capsuleBlue' },
        { name: 'Espresso In Cialde', detail: 'Bustina Cialde per sistemet PODS Pako me 150 bustina + set (gota sheqer dhe përzierës)', price: 'Porosite tani', imageKey: 'podEse' },
      ],
    },
    differenceTitle: 'Çfarë na dallon ne?',
    differenceText: 'Çdo filxhan që përgatisim është menduar për ta bërë ditën tuaj më të mirë.',
    values: [
      {
        title: 'PËRZGJEDHJE',
        text: 'E zgjedhur me përkushtim për të ofruar cilësi në çdo detaj.',
      },
      {
        title: 'KUALITET',
        text: 'Çdo filxhan Venero përgatitet me standarde të larta për të sjellë shije dhe cilësi të garantuar.',
      },
      {
        title: 'SHIJE',
        text: 'Një kafe që lë gjurmë në çdo kujtim.',
      },
    ],
    aboutTitle: 'Rreth nesh',
    aboutText:
      'Venero Caffe është fryt i pasionit për kafenë cilësore dhe përkushtimit për të sjellë një eksperiencë autentike në çdo filxhan.',
    aboutParagraphs: [
      'E krijuar mbi vlera që ndërthurin traditën me inovacionin, Venero Caffe synon të bëhet një pikë referimi për të gjithë ata që kërkojnë shije të rafinuar dhe cilësi të pakompromis.',
      'Nga përzgjedhja e kujdesshme e kokrrave të kafesë nga plantacionet më të mira në botë, deri tek procesi i pjekjes dhe përpunimit, çdo detaj ndiqet me përpikmëri për të ruajtur aromën, intensitetin dhe karakterin unik të kafesë sonë. Çdo përzierje krijohet me kujdes për të ofruar një eksperiencë të veçantë, të aftë të përshtatet me shijet dhe momentet e ndryshme të ditës.',
      'Me një vizion modern dhe një përkushtim të vazhdueshëm ndaj cilësisë, Venero Caffe nuk ofron vetëm kafe, por një kulturë të tërë shijeje dhe eksperience. Për ne, çdo filxhan përfaqëson një histori, një moment dhe një standard që respekton artin e vërtetë të kafesë.',
    ],
    aboutBrandLines: ['Venero Caffe', 'Il caffe che ami', 'Tradita italiane në çdo filxhan.'],
    contactTitle: 'Na kontaktoni',
    contactText:
      'Nëse dëshironi të zbuloni më shumë rreth kafesë sonë, përzierjeve ekskluzive, shërbimeve apo pajisjeve profesionale, ekipi ynë është gjithmonë i gatshëm t’ju ndihmojë.',
    phone: '+355 69 604 4334',
    email: 'venerocaffe@gmail.com',
    footer:
      'Çdo sukses nis me frymëzimin e duhur dhe aromën e një kafeje të mirë. Ne jemi pranë jush në çdo hap të rrugëtimit.',
    contactCta: 'Niseni sot këtë eksperiencë.',
    contactChannelsAria: 'Na kontaktoni përmes WhatsApp, telefonit ose Instagramit',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Telefon',
    instagramLabel: 'Instagram',
    phoneHeading: 'Numri i kontaktit',
    emailLabel: 'Email',
  },
  en: {
    nav: ['Home', 'About', 'Products', 'Contact'],
    productsMenu: ['Home', 'Bar', 'Office'],
    themeAriaLight: 'Switch to dark mode',
    themeAriaDark: 'Switch to light mode',
    language: 'SQ',
    heroEyebrow: 'Venero Caffe',
    heroTitle: 'Italian tradition in every cup.',
    heroText:
      'Every achievement starts with the right inspiration and a good coffee by your side. We are here to accompany every new beginning.',
    order: 'Start this experience today.',
    explore: 'Venero products',
    productsTitle: 'OUR PRODUCTS',
    productsIntro:
      'Coffee is part of everyday moments, giving energy for the day’s challenges and turning ordinary meetings into something special. Venero Caffe wants every cup to bring pleasure and make every moment unique, wherever you are.',
    categories: [
      {
        slug: 'home',
        title: 'Home',
        text: 'For everyone who enjoys coffee as a special moment to share with the people they love most.',
      },
      {
        slug: 'bar',
        title: 'Bar',
        text: 'For those who see coffee as a meaningful moment that always stays in memory.',
      },
      {
        slug: 'office',
        title: 'Office',
        text: 'Dedicated to those who give their best at work, but only after enjoying a good coffee.',
      },
    ],
    featuredTitle: 'Venero products',
    featuredText:
      'Choosing Venero Caffe means having an experienced, dedicated team beside you. We deliver not only high-quality coffee, but also focused support for businesses that serve dozens or hundreds of cups every day.',
    carouselHint: 'Swipe for more',
    viewRange: 'View full range',
    backToProducts: 'Back to products',
    categoryPages: {
      home: {
        headline: 'Home',
        sub: 'For everyone who enjoys coffee as a special moment to share with the people they love most.',
      },
      bar: {
        headline: 'Bar',
        sub: 'For those who see coffee as a meaningful moment that always stays in memory.',
      },
      office: {
        headline: 'Office',
        sub: 'Dedicated to those who give their best at work, but only after enjoying a good coffee.',
      },
    },
    catalog: {
      home: [
        { name: 'Espresso in Capsule', detail: 'Crema e Gusto — blue variant, 7.2 g', price: 'Contact us', imageKey: 'capsuleBlue' },
        { name: 'Espresso', detail: 'E.S.E. pods — Italian Taste', price: 'Contact us', imageKey: 'podEse' },
      ],
      bar: [
        { name: 'Italian Blend Intenso', detail: 'Blend for high volume', price: 'Contact us', imageKey: 'bagBlack' },
        { name: 'Italian Blend Coffee', detail: 'Balanced blend for the team', price: 'Contact us', imageKey: 'bagGold' },
      ],
      office: [
        { name: 'Espresso', detail: 'E.S.E. pods — Italian Taste', price: 'Contact us', imageKey: 'podEse' },
        { name: 'Espresso in Capsule', detail: 'Crema e Gusto — blue variant, 7.2 g', price: 'Contact us', imageKey: 'capsuleBlue' },
      ],
    },
    differenceTitle: 'What makes us different?',
    differenceText: 'Every cup we prepare is meant to make your day better.',
    values: [
      {
        title: 'SELECTION',
        text: 'Chosen with dedication to offer quality in every detail.',
      },
      {
        title: 'QUALITY',
        text: 'Every Venero cup is prepared to high standards to deliver dependable flavour and quality.',
      },
      {
        title: 'TASTE',
        text: 'A coffee that leaves a mark on every memory.',
      },
    ],
    aboutTitle: 'About us',
    aboutText:
      'Venero Caffe is the result of a passion for quality coffee and a commitment to bringing an authentic experience to every cup.',
    aboutParagraphs: [
      'Built on values that combine tradition with innovation, Venero Caffe aims to become a point of reference for everyone seeking refined taste and uncompromising quality.',
      'From the careful selection of coffee beans from some of the best plantations in the world, to roasting and processing, every detail is handled with precision to preserve aroma, intensity, and the unique character of our coffee. Each blend is created to offer a distinct experience suited to different tastes and moments of the day.',
      'With a modern vision and an ongoing commitment to quality, Venero Caffe offers not only coffee, but an entire culture of taste and experience. For us, every cup represents a story, a moment, and a standard that respects the true art of coffee.',
    ],
    aboutBrandLines: ['Venero Caffe', 'Il caffe che ami', 'Italian tradition in every cup.'],
    contactTitle: 'Contact us',
    contactText:
      'If you would like to discover more about our coffee, exclusive blends, services, or professional equipment, our team is always ready to help.',
    phone: '+355 69 604 4334',
    email: 'venerocaffe@gmail.com',
    footer:
      'Every success begins with the right inspiration and the aroma of good coffee. We stay by your side through every step of the journey.',
    contactCta: 'Start this experience today.',
    contactChannelsAria: 'Contact us on WhatsApp, phone or Instagram',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Phone',
    instagramLabel: 'Instagram',
    phoneHeading: 'Contact number',
    emailLabel: 'Email',
  },
}

export function resolveImage(key) {
  return images[key] ?? images.home
}
