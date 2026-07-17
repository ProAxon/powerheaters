import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { CONTACT, SITE, SOCIAL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Logo + Social */}
          <div>
            <div className="mb-2">
              <span className="text-2xl font-bold">POWER</span>
              <span className="ml-1 text-sm font-semibold text-red-500">HEATERS</span>
            </div>
            <p className="text-neutral-400 text-sm mb-6">{SITE.tagline}</p>
            <div className="flex gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#BE1E2D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#BE1E2D] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#BE1E2D] transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#BE1E2D] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <div className="space-y-4 text-sm">
              <p className="font-medium text-white">{CONTACT.address.company}</p>
              <div className="flex items-start gap-3 md:justify-end">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 md:order-2" />
                <a
                  href={CONTACT.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 md:text-right hover:text-white transition-colors"
                >
                  {CONTACT.address.works}
                </a>
              </div>
              <div className="flex items-start gap-3 md:justify-end">
                <Phone className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 md:order-2" />
                <div className="text-neutral-400 space-y-1">
                  <a href={`tel:+91${CONTACT.primaryPhone}`} className="block hover:text-white transition-colors">
                    {CONTACT.primaryContact}: {CONTACT.primaryPhoneDisplay}
                  </a>
                  <a href={`tel:+91${CONTACT.secondaryPhone}`} className="block hover:text-white transition-colors">
                    {CONTACT.secondaryContact}: +91 {CONTACT.secondaryPhone}
                  </a>
                  <a href={`tel:+91${CONTACT.officePhone}`} className="block hover:text-white transition-colors">
                    Office: +91 {CONTACT.officePhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 md:justify-end">
                <Mail className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0 md:order-2" />
                <div className="text-neutral-400 space-y-1">
                  <a href={`mailto:${CONTACT.email}`} className="block hover:text-white transition-colors">
                    {CONTACT.email}
                  </a>
                  <a href={`mailto:${CONTACT.emailAlt}`} className="block hover:text-white transition-colors">
                    {CONTACT.emailAlt}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} {CONTACT.address.company}. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link to="/privacy" className="text-neutral-500 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-neutral-500 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link to="/contact" className="text-neutral-500 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
