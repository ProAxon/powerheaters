import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

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

const blogPosts = [
  {
    id: 1,
    title: "Understanding Mica Band Heaters: Applications and Benefits",
    excerpt: "Mica band heaters are essential components in plastic processing machinery. Learn about their construction, working principle, and why they are preferred for industrial heating applications.",
    image: "/images/blog-mica-heaters.jpg",
    date: "February 15, 2025",
    author: "Power Heaters Team",
    category: "Heaters",
    tags: ["Mica Band Heaters", "Plastic Processing", "Industrial Heating"]
  },
  {
    id: 2,
    title: "How to Select the Right Thermocouple for Your Application",
    excerpt: "Choosing the correct thermocouple type is crucial for accurate temperature measurement. This guide covers different thermocouple types, their temperature ranges, and selection criteria.",
    image: "/images/blog-thermocouples.jpg",
    date: "February 10, 2025",
    author: "Technical Team",
    category: "Thermocouples",
    tags: ["Temperature Sensors", "Thermocouples", "Measurement"]
  },
  {
    id: 3,
    title: "Energy Saving Tips for Industrial Heating Systems",
    excerpt: "Discover practical ways to reduce energy consumption in your industrial heating systems. From proper insulation to regular maintenance, learn how to optimize your heating equipment.",
    image: "/images/blog-energy-saving.jpg",
    date: "February 5, 2025",
    author: "Power Heaters Team",
    category: "Energy Efficiency",
    tags: ["Energy Saving", "Insulation", "Efficiency"]
  },
  {
    id: 4,
    title: "Cartridge Heaters vs. Coil Heaters: Which One to Choose?",
    excerpt: "Compare the features, advantages, and applications of cartridge heaters and coil heaters to make an informed decision for your heating requirements.",
    image: "/images/blog-cartridge-coil.jpg",
    date: "January 28, 2025",
    author: "Engineering Team",
    category: "Heaters",
    tags: ["Cartridge Heaters", "Coil Heaters", "Comparison"]
  },
  {
    id: 5,
    title: "Maintenance Guide for Industrial Furnaces",
    excerpt: "Regular maintenance is key to extending the life of your industrial furnace. Learn about essential maintenance tasks, troubleshooting tips, and best practices.",
    image: "/images/blog-furnace-maintenance.jpg",
    date: "January 20, 2025",
    author: "Power Heaters Team",
    category: "Heating Equipment",
    tags: ["Furnaces", "Maintenance", "Industrial Equipment"]
  },
  {
    id: 6,
    title: "The Role of Titanium Heaters in Corrosive Environments",
    excerpt: "Titanium heaters offer exceptional corrosion resistance. Explore their applications in chemical processing, electroplating, and other harsh environments.",
    image: "/images/blog-titanium-heaters.jpg",
    date: "January 15, 2025",
    author: "Technical Team",
    category: "Heaters",
    tags: ["Titanium Heaters", "Corrosion Resistance", "Chemical Industry"]
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[350px] lg:h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/blog-hero.jpg)',
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
              Our Blog
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
              Latest news, insights, and technical information about industrial heating solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ 
                      backgroundImage: `url(${post.image})`,
                      backgroundColor: '#1a1a2e'
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-20 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/90 mb-8">
              Stay updated with the latest news, product updates, and technical insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
