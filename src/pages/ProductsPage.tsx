import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Thermometer, Factory, Settings } from 'lucide-react';
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
      staggerChildren: 0.15
    }
  }
};

const categoryIcons: Record<string, React.ElementType> = {
  heaters: Flame,
  thermocouples: Thermometer,
  'heating-equipment': Factory,
  accessories: Settings
};

export default function ProductsPage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/products-hero.jpg)',
            backgroundColor: '#1a1a2e'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Our Products
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
                Discover our comprehensive range of industrial heating elements, thermocouples, and heating equipment designed for precision and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  asChild
                >
                  <Link to="#categories">Browse Categories</Link>
                </Button>
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  asChild
                >
                  <Link to="/contact">Request Quote</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our wide range of industrial heating solutions
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {categories.map((category) => {
              const IconComponent = categoryIcons[category.id] || ArrowRight;
              const productCount = category.subcategories.reduce(
                (acc, sub) => acc + sub.products.length, 0
              );
              
              return (
                <motion.div
                  key={category.id}
                  variants={fadeInUp}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ 
                        backgroundImage: `url("${category.heroImage}")`,
                        backgroundColor: '#1a1a2e'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">
                          {category.subcategories.length} Subcategories • {productCount} Products
                        </span>
                        <Link 
                          to={`/products/${category.id}`}
                          className="inline-flex items-center text-red-400 font-medium group-hover:text-red-300 transition-colors"
                        >
                          Explore
                          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-gray-50">
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
                Our most popular heating solutions trusted by industry leaders
              </p>
            </div>
            <Button 
              variant="outline"
              className="mt-4 md:mt-0 border-red-600 text-red-600 hover:bg-red-50"
              asChild
            >
              <Link to="/products/heaters">View All Products</Link>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
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
              Need Custom Heating Solutions?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              We manufacture custom heaters as per your specifications. Contact us to discuss your requirements.
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
                <Link to="/downloads">Download Catalog</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
