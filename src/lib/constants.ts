export const SITE = {
  name: 'Power Heaters',
  tagline: 'Heating Ideas…Melting Problems',
  domain: 'www.powerheaters.in',
  established: 1991,
} as const;

export const CONTACT = {
  primaryPhone: '7447756799',
  primaryPhoneDisplay: '+91 7447756799',
  primaryContact: 'Mr. Prathamesh Teli',
  secondaryPhone: '9850056799',
  secondaryContact: 'Mr. Anil M Teli',
  officePhone: '9130056799',
  email: 'info@powerheaters.in',
  emailAlt: 'powerheaterspvtltd@gmail.com',
  whatsapp: '917447756799',
  address: {
    works: 'Gut No. 39, Plot No. 25-27, MIDC Waluj, Chh. Sambhajinagar, Maharashtra, India',
    company: 'Power Heaters Pvt Ltd',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.0!2d75.85!3d19.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUyJzQ4LjAiTiA3NcKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1',
  workingHours: 'Monday – Saturday, 9:00 AM – 6:00 PM',
} as const;

export const SOCIAL = {
  facebook: 'https://www.facebook.com/profile.php?id=61591207233601',
  instagram: 'https://www.instagram.com/powerheaterspvtltd',
  x: 'https://x.com/powerheaters91',
  linkedin: 'https://www.linkedin.com/company/power-heaters-private-limited',
} as const;

export const HERO_SLIDES = [
  {
    image: '/images/hero-bg.jpg',
    title: 'INDUSTRIAL HEATING SOLUTIONS',
    subtitle: 'HEATING IDEAS. MELTING PROBLEMS.',
    cta: { label: 'READ MORE', href: '/products' },
  },
  {
    image: '/images/heaters-category-hero.jpg',
    title: 'ELECTRIC HEATING ELEMENTS',
    subtitle: 'CUSTOM MANUFACTURING. QUALITY ASSURED.',
    cta: { label: 'READ MORE', href: '/products/heaters' },
  },
  {
    image: '/images/facility.jpg',
    title: 'TEMPERATURE SENSING SOLUTIONS',
    subtitle: 'TRUSTED SINCE 1991.',
    cta: { label: 'READ MORE', href: '/about' },
  },
] as const;
