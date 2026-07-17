import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={`tel:+91${CONTACT.primaryPhone}`}
        className="w-14 h-14 bg-[#BE1E2D] hover:bg-[#9E1825] text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
