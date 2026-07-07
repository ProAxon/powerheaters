import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  X, 
  Upload, 
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CONTACT } from '@/lib/constants';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

export default function ContactPage() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    specifications: ''
  });

  // Show enquiry popup on Contact page visit
  useEffect(() => {
    const timer = setTimeout(() => setShowQuoteModal(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Quote Request from ${quoteFormData.name} - ${quoteFormData.product}`;
    const body = `
Name: ${quoteFormData.name}
Email: ${quoteFormData.email}
Phone: ${quoteFormData.phone}
Company: ${quoteFormData.company}
Product: ${quoteFormData.product}

Specifications:
${quoteFormData.specifications}
    `;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setQuoteSubmitted(true);
    setTimeout(() => {
      setShowQuoteModal(false);
      setQuoteSubmitted(false);
      setQuoteFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        specifications: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Quote Modal */}
      <AnimatePresence>
        {showQuoteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowQuoteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-red-600 p-6 rounded-t-2xl flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Get a Quote</h2>
                  <p className="text-white/80 text-sm">Fill in your details for a customized quote</p>
                </div>
                <button 
                  onClick={() => setShowQuoteModal(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                {quoteSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
                    <p className="text-gray-600">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quote-name">Full Name *</Label>
                        <Input 
                          id="quote-name" 
                          placeholder="Your name" 
                          required
                          value={quoteFormData.name}
                          onChange={(e) => setQuoteFormData({...quoteFormData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quote-phone">Phone Number *</Label>
                        <Input 
                          id="quote-phone" 
                          placeholder="+91-XXXXXXXXXX" 
                          required
                          value={quoteFormData.phone}
                          onChange={(e) => setQuoteFormData({...quoteFormData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quote-email">Email Address *</Label>
                        <Input 
                          id="quote-email" 
                          type="email" 
                          placeholder="your@email.com" 
                          required
                          value={quoteFormData.email}
                          onChange={(e) => setQuoteFormData({...quoteFormData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quote-company">Company Name</Label>
                        <Input 
                          id="quote-company" 
                          placeholder="Your company" 
                          value={quoteFormData.company}
                          onChange={(e) => setQuoteFormData({...quoteFormData, company: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quote-product">Product Interest *</Label>
                      <Input 
                        id="quote-product" 
                        placeholder="e.g., Mica Band Heater, 100mm diameter" 
                        required
                        value={quoteFormData.product}
                        onChange={(e) => setQuoteFormData({...quoteFormData, product: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quote-specs">Specifications / Requirements</Label>
                      <Textarea 
                        id="quote-specs" 
                        placeholder="Describe your requirements: dimensions, wattage, voltage, quantity, etc." 
                        className="min-h-[100px]"
                        value={quoteFormData.specifications}
                        onChange={(e) => setQuoteFormData({...quoteFormData, specifications: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <Upload className="w-5 h-5 text-gray-500" />
                        <span className="text-sm text-gray-600">Attach drawing/specification (PDF, JPG, PNG)</span>
                        <input type="file" className="hidden" accept=".pdf,.jpg,.png,.dwg" />
                      </Label>
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white h-12"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Quote Request
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      Your request will be sent to: {CONTACT.email}
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[350px] lg:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/contact-hero.jpg)',
            backgroundColor: '#1a1a2e'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
              Get in touch with us for all your heating requirements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 bg-gray-50 -mt-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                icon: MapPin, 
                title: 'Address', 
                content: `${CONTACT.address.company}\n${CONTACT.address.works}` 
              },
              { 
                icon: Phone, 
                title: 'Phone', 
                content: `${CONTACT.primaryContact}: ${CONTACT.primaryPhoneDisplay}\n${CONTACT.secondaryContact}: +91 ${CONTACT.secondaryPhone}\nOffice: +91 ${CONTACT.officePhone}` 
              },
              { 
                icon: Mail, 
                title: 'Email', 
                content: `${CONTACT.email}\n${CONTACT.emailAlt}` 
              },
              { 
                icon: Clock, 
                title: 'Working Hours', 
                content: CONTACT.workingHours
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 whitespace-pre-line text-sm">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const phone = formData.get('phone') as string;
                  const message = formData.get('message') as string;
                  const subject = `Contact Form - ${name}`;
                  const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
                  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      className="h-12"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      placeholder="+91-XXXXXXXXXX" 
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input 
                      id="company" 
                      name="company"
                      placeholder="Your company" 
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="product">Product Interest</Label>
                  <Input 
                    id="product" 
                    name="product"
                    placeholder="Which product are you interested in?" 
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your requirements..." 
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white w-full md:w-auto"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
            
            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Google Map */}
              <div className="rounded-xl overflow-hidden h-[350px] border border-gray-200">
                <iframe
                  title="Power Heaters Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.1987654321!2d75.2134!3d19.8761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3c47e9e8b8b8b8b9%3A0x0!2sMIDC%20Waluj%2C%20Chhatrapati%20Sambhajinagar!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              {/* Quick Contact Info */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp / Call</p>
                      <a href={`https://wa.me/${CONTACT.whatsapp}`} className="text-red-600 hover:underline">
                        {CONTACT.primaryPhoneDisplay}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp Business</p>
                      <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-red-600 hover:underline">
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </motion.div>

          <motion.div 
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                q: 'Do you manufacture custom heaters?',
                a: 'Yes, we specialize in manufacturing custom heaters as per your specific requirements. Please share your specifications including dimensions, wattage, voltage, and application.'
              },
              {
                q: 'What is the delivery time?',
                a: 'Standard products are delivered within 3-5 working days. Custom products may take 7-15 working days depending on the complexity and quantity.'
              },
              {
                q: 'Do you provide warranty?',
                a: 'Yes, all our products come with a standard 6-month warranty against manufacturing defects. Extended warranty options are available for select products.'
              },
              {
                q: 'Do you export internationally?',
                a: 'Yes, we export to over 20 countries worldwide. We have experience in handling international shipping and documentation.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contact us today to discuss your heating requirements and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:+91${CONTACT.primaryPhone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a 
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
