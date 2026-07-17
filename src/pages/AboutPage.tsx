import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, CheckCircle, Target, Eye, Lightbulb, Shield, Truck, RefreshCw } from 'lucide-react';
import { SITE } from '@/lib/constants';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const coreValues = [
  {
    icon: Award,
    title: 'Quality Excellence',
    desc: 'We are committed to delivering products that meet the highest standards of performance, reliability, and durability.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    desc: 'We build long-term relationships by understanding customer needs and providing tailored solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We continuously improve our products and processes to meet evolving industrial challenges.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We conduct our business with honesty, transparency, and professionalism.',
  },
  {
    icon: Truck,
    title: 'Commitment to Delivery',
    desc: "We ensure timely delivery and dependable service to support our customers' operations.",
  },
  {
    icon: RefreshCw,
    title: 'Continuous Improvement',
    desc: 'We embrace learning, technology, and innovation to drive sustainable growth and excellence.',
  },
];

const whyChoose = [
  'Established expertise since 1991',
  'Comprehensive Heating and Sensing Solutions',
  'Customized products for industrial applications',
  'Focus on Quality, Cost, and Timely Delivery',
  'Advanced manufacturing capabilities',
  'Customer-focused engineering support',
  'Reliable performance and long service life',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[350px] lg:h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/IMMERSION HEATERS.JPG)', backgroundColor: '#2b2b2b' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">About Us</h1>
            <p className="text-lg text-white/85 max-w-2xl mx-auto font-light">
              Industrial heating and sensing solutions since {SITE.established}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading-red text-3xl font-bold mb-6">Industries We Serve</h2>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img
                  src="/images/MICA BAND HEATER.JPG"
                  alt="Industrial heaters manufactured by Power Heaters"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-gray-600 leading-relaxed"
            >
              <p>
                Established in {SITE.established}, Power Heaters has been at the forefront of manufacturing
                Industrial Heaters, Thermocouples, and Heating Equipment Solutions for a wide range of industries.
              </p>
              <p>
                With over three decades of industry experience, we have established ourselves as a trusted partner
                for customers seeking reliable, efficient, and customized heating solutions. Our expertise lies in
                designing and manufacturing high-performance products that enhance operational efficiency, improve
                process reliability, and support the evolving needs of modern industries.
              </p>
              <p>
                Driven by innovation and a commitment to excellence, we offer a comprehensive range of Heaters,
                Thermocouples, Temperature Sensors, and Heating Equipment tailored to diverse industrial applications.
              </p>
              <p>
                At Power Heaters, our business philosophy is built on three core pillars: Quality, Cost, and Delivery.
                By consistently focusing on these fundamentals, we have developed long-lasting relationships with our
                valued customers across various industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Power Heaters?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Power Heaters, we don&apos;t just manufacture products—we deliver solutions that power industrial success.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whyChoose.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver innovative, reliable, and energy-efficient heating and sensing solutions that enhance the
                productivity, safety, and operational efficiency of industries worldwide. Through quality manufacturing,
                technical excellence, and customer-focused service, we strive to exceed expectations and create lasting
                value for our customers.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a globally recognized leader in industrial heating and temperature sensing solutions, known for
                innovation, quality, reliability, and customer trust. We aim to drive industrial progress by continuously
                developing advanced technologies that empower businesses to achieve greater efficiency and sustainable growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-xl hover:bg-red-50/50 transition-colors"
              >
                <value.icon className="w-8 h-8 text-red-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['ISO 9001:2015', 'Quality Certified', 'Export Compliant'].map((cert) => (
              <div key={cert} className="bg-white rounded-xl px-8 py-6 shadow-sm border border-gray-100">
                <Award className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage / 90s Photos */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Heritage</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since our founding in {SITE.established}, Power Heaters has grown from a small manufacturing unit to a
                leading industrial heating solutions provider. Our journey reflects decades of dedication, innovation,
                and customer trust.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are committed to providing dependable products, technical expertise, and exceptional service, making
                us your trusted problem solver in Heating and Sensing applications.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div
                className="aspect-[4/3] rounded-lg bg-cover bg-center bg-gray-100"
                style={{ backgroundImage: 'url(/images/COIL HEATERS.JPG)' }}
              />
              <div
                className="aspect-[4/3] rounded-lg bg-cover bg-center bg-gray-100"
                style={{ backgroundImage: 'url(/images/CERAMIC BAND HEATER.JPG)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-16 lg:py-20 bg-[var(--brand-gray-dark)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="aspect-[4/3] rounded-xl bg-cover bg-center bg-neutral-800"
              style={{ backgroundImage: 'url(/images/MANIFOLD HEATERS.JPG)' }}
            />
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">State-of-the-Art Manufacturing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our manufacturing facility at MIDC Waluj is equipped with advanced machinery and technology to produce
                high-quality heating elements. We use precision winding machines and maintain strict quality control at
                every stage of production.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Award, title: 'Quality Certified', desc: 'ISO 9001:2015' },
                  { icon: Users, title: 'Expert Team', desc: 'Skilled Engineers' },
                  { icon: Globe, title: 'Global Reach', desc: 'Export Worldwide' },
                  { icon: TrendingUp, title: 'Innovation', desc: 'Latest Technology' },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 rounded-lg p-4 text-center">
                    <item.icon className="w-7 h-7 mx-auto mb-2" style={{ color: 'var(--brand-yellow)' }} />
                    <p className="text-white text-sm font-medium">{item.title}</p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
