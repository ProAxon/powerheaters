import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, CheckCircle, Target, Eye } from 'lucide-react';

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/about-hero.jpg)',
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
              About Power Heaters
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
              Leading manufacturer of industrial heating solutions since 1998
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Partner for Industrial Heating Solutions
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Power Heaters is a leading manufacturer and exporter of industrial heaters, thermocouples, and heating equipment based in India. Established in 1998, we have grown to become one of the most trusted names in the heating industry, serving clients across the globe.
                </p>
                <p>
                  We specialize in manufacturing a comprehensive range of heating elements including Mica Band Heaters, Ceramic Band Heaters, Nozzle Band Heaters, Tubular Heaters, Cartridge Heaters, Coil Heaters, Immersion Heaters, and more. Our products are widely used in plastic processing machinery, injection molding machines, extruders, and various other industrial applications.
                </p>
                <p>
                  With state-of-the-art manufacturing facilities and a team of skilled engineers, we are committed to delivering high-quality products that meet international standards. Our focus on innovation, quality, and customer satisfaction has helped us build long-lasting relationships with our clients.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
                <div className="text-gray-700">Products</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-700">Clients</div>
              </div>
              <div className="bg-red-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">20+</div>
                <div className="text-gray-700">Countries</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative, reliable, and energy-efficient heating solutions that meet the evolving needs of our customers. We are committed to excellence in manufacturing, continuous improvement, and delivering value to our stakeholders while maintaining the highest standards of quality and safety.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in industrial heating solutions, recognized for our innovation, quality, and customer-centric approach. We aim to expand our presence worldwide while maintaining our commitment to sustainable manufacturing practices and technological advancement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                icon: Award, 
                title: 'Quality First', 
                desc: 'We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards.' 
              },
              { 
                icon: Users, 
                title: 'Customer Focus', 
                desc: 'Our customers are at the heart of everything we do. We strive to exceed their expectations.' 
              },
              { 
                icon: TrendingUp, 
                title: 'Innovation', 
                desc: 'We continuously invest in research and development to bring innovative solutions to market.' 
              },
              { 
                icon: Globe, 
                title: 'Integrity', 
                desc: 'We conduct our business with honesty, transparency, and ethical practices.' 
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-colors"
              >
                <value.icon className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Power Heaters?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for industrial heating solutions
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              'Premium quality raw materials',
              'Advanced CNC winding machines',
              'Custom designs as per specifications',
              'Competitive pricing',
              'Timely delivery',
              'ISO 9001:2015 certified',
              'In-house testing facility',
              'Experienced technical team',
              'Pan India & Export presence'
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center bg-gray-800 rounded-lg p-4"
              >
                <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div 
                className="aspect-[4/3] rounded-xl bg-cover bg-center shadow-xl"
                style={{ 
                  backgroundImage: 'url(/images/facility.jpg)',
                  backgroundColor: '#1a1a2e'
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art Manufacturing
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our manufacturing facility is equipped with the latest machinery and technology to produce high-quality heating elements. We use advanced CNC winding machines for precise coil winding, ensuring consistent quality across all our products.
                </p>
                <p>
                  The facility includes dedicated sections for different product lines, quality control laboratories, and a well-equipped testing center. Our in-house capabilities allow us to maintain strict quality control at every stage of production.
                </p>
                <p>
                  We continuously invest in upgrading our infrastructure and training our workforce to stay at the forefront of heating technology. Our commitment to excellence has earned us the trust of clients across various industries.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
