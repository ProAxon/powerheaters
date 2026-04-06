import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Thermometer, 
  Factory, 
  Settings, 
  ArrowRight, 
  CheckCircle,
  Award,
  Users,
  Globe,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories, getFeaturedProducts } from '@/data/products';

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

const categoryIcons: Record<string, React.ElementType> = {
  heaters: Flame,
  thermocouples: Thermometer,
  'heating-equipment': Factory,
  accessories: Settings
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[700px] lg:h-[800px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundColor: '#1a1a2e'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-600/90 text-white text-sm font-medium rounded-full mb-6">
                <Award className="w-4 h-4 mr-2" />
                India's Leading Heater Manufacturer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Industrial Heating Solutions
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
                Power Heaters is a leading manufacturer and exporter of industrial heaters, thermocouples, and heating equipment. We provide complete heating solutions for plastic processing, chemical, and manufacturing industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  asChild
                >
                  <Link to="/products">Explore Products</Link>
                </Button>
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  asChild
                >
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '25+', label: 'Years Experience' },
                { value: '1000+', label: 'Products' },
                { value: '500+', label: 'Happy Clients' },
                { value: '99%', label: 'Quality Rating' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-500">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive heating solutions for industrial applications
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.id] || Flame;
              const productCount = category.subcategories.reduce(
                (acc, sub) => acc + sub.products.length, 0
              );
              
              return (
                <motion.div
                  key={category.id}
                  variants={fadeInUp}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {productCount} Products
                      </span>
                      <Link 
                        to={`/products/${category.id}`}
                        className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                      >
                        View All
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600 max-w-xl">
                Our most popular industrial heating solutions trusted by manufacturers worldwide
              </p>
            </div>
            <Button 
              variant="outline"
              className="mt-4 md:mt-0 border-red-600 text-red-600 hover:bg-red-50"
              asChild
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ 
                      backgroundImage: `url("${product.image}")`,
                      backgroundColor: '#e5e7eb'
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-red-600 mb-4">
                    {product.name}
                  </h3>
                  <Link 
                    to={`/products/detail/${product.id}`}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    Learn more 
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Power Heaters?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                With over 25 years of experience in the heating industry, we have established ourselves as a trusted manufacturer of industrial heating elements. Our commitment to quality, innovation, and customer satisfaction sets us apart.
              </p>
              <div className="space-y-4">
                {[
                  'Premium quality raw materials',
                  'Advanced manufacturing technology',
                  'Custom designs as per requirements',
                  'Competitive pricing',
                  'Timely delivery',
                  'Excellent after-sales support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, title: 'Quality Certified', desc: 'ISO 9001:2015' },
                { icon: Users, title: 'Expert Team', desc: 'Skilled Engineers' },
                { icon: Globe, title: 'Global Reach', desc: 'Export Worldwide' },
                { icon: TrendingUp, title: 'Innovation', desc: 'Latest Technology' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 text-center">
                  <item.icon className="w-10 h-10 text-red-500 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our heating solutions cater to a wide range of industries
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              'Plastic Processing',
              'Chemical Industry',
              'Food Processing',
              'Packaging',
              'Automotive',
              'Pharmaceutical',
              'Textile',
              'Electronics',
              'Heat Treatment',
              'Rubber Industry',
              'Paper Industry',
              'Laboratory'
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-red-200 transition-colors">
                  <Factory className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-sm font-medium text-gray-800">{industry}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Custom Heating Solutions?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contact our team today to discuss your specific requirements. We manufacture custom heaters as per your specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100"
                asChild
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
                asChild
              >
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
