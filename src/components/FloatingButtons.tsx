import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, FileText, Upload, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function FloatingButtons() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Quote Request from ${formData.name} - ${formData.product}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Product: ${formData.product}

Message:
${formData.message}
    `;
    window.location.href = `mailto:info@powerheaters.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => {
      setShowQuoteForm(false);
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Get Quote Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowQuoteForm(true)}
          className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          title="Get a Quote"
        >
          <FileText className="w-6 h-6" />
        </motion.button>

        {/* WhatsApp Button */}
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/917942558620"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>

        {/* Call Button */}
        <motion.a
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="tel:+917942558620"
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          title="Call Now"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>

      {/* Quote Form Modal */}
      <AnimatePresence>
        {showQuoteForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowQuoteForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-red-600 p-6 rounded-t-2xl flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Get a Quote</h2>
                  <p className="text-white/80 text-sm">Fill in your details and we'll get back to you</p>
                </div>
                <button 
                  onClick={() => setShowQuoteForm(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <div className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
                    <p className="text-gray-600">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quote-name">Full Name *</Label>
                        <Input 
                          id="quote-name" 
                          placeholder="Your name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quote-phone">Phone Number *</Label>
                        <Input 
                          id="quote-phone" 
                          placeholder="+91-XXXXXXXXXX" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quote-company">Company Name</Label>
                        <Input 
                          id="quote-company" 
                          placeholder="Your company" 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quote-product">Product Interest *</Label>
                      <Input 
                        id="quote-product" 
                        placeholder="e.g., Mica Band Heater, 100mm diameter" 
                        required
                        value={formData.product}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quote-message">Requirements / Specifications</Label>
                      <Textarea 
                        id="quote-message" 
                        placeholder="Describe your requirements, dimensions, wattage, voltage, quantity, etc." 
                        className="min-h-[100px]"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2 cursor-pointer">
                        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                          <Upload className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-600">Attach drawing/specification (optional)</span>
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
                      Your request will be sent to: info@powerheaters.com
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
