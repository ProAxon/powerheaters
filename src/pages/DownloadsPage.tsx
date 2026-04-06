import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, FileSpreadsheet, Image, Video, ExternalLink } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const downloads = [
  {
    category: "Brochures & Catalogs",
    items: [
      {
        title: "Power Heaters Complete Product Catalog",
        description: "Comprehensive catalog featuring our entire range of heaters, thermocouples, and heating equipment.",
        size: "8.5 MB",
        format: "PDF",
        icon: BookOpen
      },
      {
        title: "Band Heaters Product Brochure",
        description: "Detailed specifications and applications of Mica, Ceramic, and Nozzle Band Heaters.",
        size: "3.2 MB",
        format: "PDF",
        icon: FileText
      },
      {
        title: "Thermocouples Selection Guide",
        description: "Complete guide to selecting the right thermocouple for your temperature measurement needs.",
        size: "2.8 MB",
        format: "PDF",
        icon: FileText
      }
    ]
  },
  {
    category: "Technical Datasheets",
    items: [
      {
        title: "Mica Band Heater Technical Datasheet",
        description: "Technical specifications, dimensions, and performance data for Mica Band Heaters.",
        size: "1.5 MB",
        format: "PDF",
        icon: FileSpreadsheet
      },
      {
        title: "Cartridge Heater Technical Datasheet",
        description: "Detailed technical information about our high-watt density cartridge heaters.",
        size: "1.2 MB",
        format: "PDF",
        icon: FileSpreadsheet
      },
      {
        title: "Tubular Heater Technical Datasheet",
        description: "Specifications for various tubular heater configurations and sheath materials.",
        size: "1.8 MB",
        format: "PDF",
        icon: FileSpreadsheet
      },
      {
        title: "Ceramic Band Heater Technical Datasheet",
        description: "Technical details for ceramic insulated band heaters with energy-saving features.",
        size: "1.4 MB",
        format: "PDF",
        icon: FileSpreadsheet
      }
    ]
  },
  {
    category: "Application Guides",
    items: [
      {
        title: "Heater Selection Guide",
        description: "Step-by-step guide to selecting the right heater for your application.",
        size: "2.1 MB",
        format: "PDF",
        icon: BookOpen
      },
      {
        title: "Installation & Maintenance Manual",
        description: "Best practices for installing and maintaining industrial heating elements.",
        size: "3.5 MB",
        format: "PDF",
        icon: BookOpen
      },
      {
        title: "Troubleshooting Guide",
        description: "Common heater problems and their solutions for quick troubleshooting.",
        size: "1.9 MB",
        format: "PDF",
        icon: BookOpen
      }
    ]
  },
  {
    category: "Media & Resources",
    items: [
      {
        title: "Company Profile",
        description: "Learn about Power Heaters, our history, capabilities, and certifications.",
        size: "4.2 MB",
        format: "PDF",
        icon: FileText
      },
      {
        title: "Product Images (High Resolution)",
        description: "High-quality product images for your catalogs and presentations.",
        size: "45 MB",
        format: "ZIP",
        icon: Image
      },
      {
        title: "Product Videos",
        description: "Video demonstrations of our products and manufacturing processes.",
        size: "120 MB",
        format: "ZIP",
        icon: Video
      }
    ]
  }
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[350px] lg:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/downloads-hero.jpg)',
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
              Downloads
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
              Access our product catalogs, technical datasheets, and application guides
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {downloads.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {section.category}
              </h2>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                        <item.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                              {item.format}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {item.size}
                            </span>
                          </div>
                          <button className="flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Request Custom Document */}
      <section className="py-16 lg:py-20 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom Document?
            </h2>
            <p className="text-white/90 mb-8">
              Can't find what you're looking for? Contact us for specific product documentation or custom datasheets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@powerheaters.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                Request Document
              </a>
              <a 
                href="https://wa.me/917942558620"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Chat with Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
