import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight, 
  Check,
  Factory,
  Settings,
  Flame,
  Thermometer,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getSubcategoryById, getCategoryById } from '@/data/products';

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

export default function SubcategoryPage() {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const categoryData = getCategoryById(category || '');
  const subcategoryData = getSubcategoryById(category || '', subcategory || '');

  if (!categoryData || !subcategoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">The requested subcategory could not be found.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-red-600 transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to={`/products/${category}`} className="hover:text-red-600 transition-colors">
              {categoryData.name}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{subcategoryData.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url("${subcategoryData.heroImage}")`,
            backgroundColor: '#2b2b2b'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              {subcategoryData.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
              {subcategoryData.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              {subcategoryData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our range of high-quality {subcategoryData.name.toLowerCase()}
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {subcategoryData.products.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/products/detail/${product.id}`}>
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ 
                        backgroundImage: `url("${product.image}")`,
                        backgroundColor: '#e5e7eb'
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <span className="inline-flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors">
                      Learn more 
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {subcategoryData.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quality features that set our products apart
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              { icon: Factory, title: 'Industrial Grade', desc: 'Built for heavy-duty applications' },
              { icon: Settings, title: 'Customizable', desc: 'Made to your specifications' },
              { icon: Flame, title: 'High Temperature', desc: 'Operates at extreme temperatures' },
              { icon: Zap, title: 'Energy Efficient', desc: 'Optimized power consumption' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600 group-hover:text-red-600 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 lg:py-24 bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Applications
              </h2>
              <p className="text-gray-400 mb-8">
                Our {subcategoryData.name.toLowerCase()} are widely used across various industries for different applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Plastic Processing',
                  'Injection Molding',
                  'Extrusion',
                  'Blow Molding',
                  'Heat Treatment',
                  'Food Processing',
                  'Chemical Industry',
                  'Packaging'
                ].map((app, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-gray-300">{app}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-neutral-800 rounded-xl p-8"
            >
              <Thermometer className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Temperature Range
              </h3>
              <p className="text-gray-400 mb-6">
                Our heaters are designed to operate efficiently across a wide temperature range, ensuring reliable performance in various industrial applications.
              </p>
              <div className="flex items-center justify-between bg-gray-700 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">-200°C</div>
                  <div className="text-sm text-gray-400">Min</div>
                </div>
                <div className="text-gray-500">to</div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500">1500°C</div>
                  <div className="text-sm text-gray-400">Max</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contact our team to discuss your specific requirements and get a customized quote.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
