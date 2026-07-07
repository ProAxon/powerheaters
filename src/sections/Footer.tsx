import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CONTACT, SITE, SOCIAL } from '@/lib/constants';

function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    visit: false,
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = [form.firstName, form.middleName, form.lastName].filter(Boolean).join(' ');
    const subject = `Callback Request from ${name}`;
    const body = `Name: ${name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}
Wants to visit: ${form.visit ? 'Yes' : 'No'}
${form.visit ? `Preferred Date: ${form.date}\nPreferred Time: ${form.time}` : ''}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
        <p className="text-white font-medium">Request sent! We&apos;ll call you back soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        <div>
          <Label htmlFor="cb-first" className="text-gray-400 text-xs">First</Label>
          <Input
            id="cb-first"
            placeholder="First"
            required
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-9 text-sm"
          />
        </div>
        <div>
          <Label htmlFor="cb-middle" className="text-gray-400 text-xs">Middle</Label>
          <Input
            id="cb-middle"
            placeholder="Middle"
            value={form.middleName}
            onChange={(e) => setForm({ ...form, middleName: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-9 text-sm"
          />
        </div>
        <div>
          <Label htmlFor="cb-last" className="text-gray-400 text-xs">Last</Label>
          <Input
            id="cb-last"
            placeholder="Last"
            required
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-9 text-sm"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="cb-email" className="text-gray-400 text-xs">Email ID</Label>
        <Input
          id="cb-email"
          type="email"
          placeholder="your@email.com"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-9 text-sm"
        />
      </div>

      <div>
        <Label htmlFor="cb-phone" className="text-gray-400 text-xs">Mobile No.</Label>
        <div className="flex">
          <span className="inline-flex items-center px-3 bg-gray-700 border border-gray-600 rounded-l-md text-gray-300 text-sm">
            +
          </span>
          <Input
            id="cb-phone"
            placeholder="7447756799"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-9 text-sm rounded-l-none"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="cb-company" className="text-gray-400 text-xs">Company Name</Label>
        <Input
          id="cb-company"
          placeholder="Your company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 h-9 text-sm"
        />
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={form.visit}
          onChange={(e) => setForm({ ...form, visit: e.target.checked })}
          className="rounded border-gray-600"
        />
        <span className="text-sm text-gray-300">I want to visit Power Heaters Pvt Ltd</span>
      </label>

      {form.visit && (
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="cb-date" className="text-gray-400 text-xs">Date</Label>
            <Input
              id="cb-date"
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="bg-gray-800 border-gray-700 text-white h-9 text-sm"
            />
          </div>
          <div>
            <Label htmlFor="cb-time" className="text-gray-400 text-xs">Time</Label>
            <Input
              id="cb-time"
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="bg-gray-800 border-gray-700 text-white h-9 text-sm"
            />
          </div>
        </div>
      )}

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white h-10 mt-2">
        <Send className="w-4 h-4 mr-2" />
        Request Callback
      </Button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Left: Logo + Social */}
          <div>
            <div className="mb-2">
              <span className="text-2xl font-bold">POWER</span>
              <span className="ml-1 text-sm font-semibold text-red-500">HEATERS</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">{SITE.tagline}</p>
            <div className="flex gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">fb &bull; Insta &bull; X &bull; in</p>
          </div>

          {/* Middle: Callback Form */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Ask for a Callback</h3>
            <CallbackForm />
          </div>

          {/* Right: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <div className="space-y-4 text-sm">
              <p className="font-medium text-white">{CONTACT.address.company}</p>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{CONTACT.address.works}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 space-y-1">
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
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 space-y-1">
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

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {CONTACT.address.company}. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
