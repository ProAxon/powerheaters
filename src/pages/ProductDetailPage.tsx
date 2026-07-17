import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  ArrowRight,
  Check,
  Factory,
  Settings,
  Phone,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import { getProductById, getRelatedProducts, categories } from '@/data/products';

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

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || '');

  // Find which category/subcategory this product belongs to
  let categoryId = '';
  let subcategoryId = '';
  for (const cat of categories) {
    for (const sub of cat.subcategories) {
      if (sub.products.find(p => p.id === productId)) {
        categoryId = cat.id;
        subcategoryId = sub.id;
        break;
      }
    }
    if (categoryId) break;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The requested product could not be found.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.relatedProducts);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
          <nav className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-red-600 transition-colors">Products</Link>
            {categoryId && (
              <>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link to={`/products/${categoryId}`} className="hover:text-red-600 transition-colors">
                  {categories.find(c => c.id === categoryId)?.name}
                </Link>
              </>
            )}
            {subcategoryId && (
              <>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link to={`/products/${categoryId}/${subcategoryId}`} className="hover:text-red-600 transition-colors">
                  {categories.find(c => c.id === categoryId)?.subcategories.find(s => s.id === subcategoryId)?.name}
                </Link>
              </>
            )}
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url("${product.heroImage}")`,
            backgroundColor: '#2b2b2b'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              {product.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Overview Card - Overlapping Hero */}
      <section className="relative z-10 -mt-32 lg:-mt-40 pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div 
                className="h-64 lg:h-auto min-h-[350px] bg-cover bg-center"
                style={{ 
                  backgroundImage: `url("${product.image}")`,
                  backgroundColor: '#f3f4f6'
                }}
              />
              
              {/* Product Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-red-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
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
              Technical Specifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed specifications and performance characteristics
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {product.specifications.map((spec, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 text-center shadow-sm"
              >
                <div className="text-sm text-gray-500 mb-2">{spec.label}</div>
                <div className="text-lg font-semibold text-gray-900">{spec.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Applications
              </h2>
              <p className="text-gray-600 mb-8">
                Our {product.name} are widely used across various industries for different heating applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {product.applications.map((app, index) => (
                  <div key={index} className="flex items-center">
                    <Factory className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <Settings className="w-12 h-12 text-red-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Custom Manufacturing
              </h3>
              <p className="text-gray-600 mb-6">
                We manufacture {product.name.toLowerCase()} as per your specific requirements. Share your specifications including dimensions, wattage, voltage, and application.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-red-600 mr-2" />
                  Custom dimensions
                </div>
                <div className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-red-600 mr-2" />
                  Custom wattage & voltage
                </div>
                <div className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-red-600 mr-2" />
                  Special terminal options
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
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
                Related Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore other products in our range
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  variants={fadeInUp}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <Link to={`/products/detail/${relatedProduct.id}`}>
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ 
                          backgroundImage: `url("${relatedProduct.image}")`,
                          backgroundColor: '#e5e7eb'
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedProduct.description}
                      </p>
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
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in {product.name}?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Get in touch with our team for detailed specifications, pricing, and custom manufacturing options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
                asChild
              >
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Request a Quote
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900"
                asChild
              >
                <Link to="/products">
                  <Mail className="w-4 h-4 mr-2" />
                  View All Products
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
