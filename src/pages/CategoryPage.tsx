import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCategoryById } from '@/data/products';

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

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const categoryData = getCategoryById(category || '');

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-6">The requested category could not be found.</p>
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
            <span className="text-gray-900 font-medium">{categoryData.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url("${categoryData.heroImage}")`,
            backgroundColor: '#1a1a2e'
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
              {categoryData.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
              {categoryData.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subcategories Grid */}
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
              Explore Subcategories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our range of {categoryData.name.toLowerCase()} products
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {categoryData.subcategories.map((subcategory) => (
              <motion.div
                key={subcategory.id}
                variants={fadeInUp}
                className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/products/${category}/${subcategory.id}`}>
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ 
                        backgroundImage: `url("${subcategory.heroImage}")`,
                        backgroundColor: '#1a1a2e'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {subcategory.name}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {subcategory.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {subcategory.products.length} Products
                    </span>
                    <span className="inline-flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors">
                      Explore
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Popular products from this category
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {categoryData.subcategories
              .flatMap(sub => sub.products)
              .slice(0, 4)
              .map((product) => (
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
              Need Help Choosing?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Our experts are ready to help you find the perfect solution for your application.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
