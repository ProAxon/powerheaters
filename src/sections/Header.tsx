import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Flame, 
  Thermometer, 
  Factory,
  Settings,
  ArrowRight,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/products';

const categoryIcons: Record<string, React.ElementType> = {
  heaters: Flame,
  thermocouples: Thermometer,
  'heating-equipment': Factory,
  accessories: Settings
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              POWER
            </span>
            <span className={`ml-1 text-sm font-medium transition-colors ${
              isScrolled ? 'text-red-600' : 'text-red-400'
            }`}>
              HEATERS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                isActive('/') && !isActive('/products') && !isActive('/about') && !isActive('/contact')
                  ? 'text-red-600' 
                  : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center text-sm font-medium transition-colors hover:text-red-600 ${
                  isActive('/products') 
                    ? 'text-red-600' 
                    : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${
                  activeDropdown === 'products' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                  >
                    <div className="bg-white rounded-xl shadow-xl p-6 min-w-[800px]">
                      <div className="grid grid-cols-2 gap-6">
                        {categories.map((category) => {
                          const IconComponent = categoryIcons[category.id] || ArrowRight;
                          return (
                            <div key={category.id}>
                              <Link 
                                to={`/products/${category.id}`}
                                className="flex items-center mb-4 group"
                              >
                                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-3 group-hover:bg-red-100 transition-colors">
                                  <IconComponent className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                                    {category.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {category.subcategories.length} subcategories
                                  </div>
                                </div>
                              </Link>
                              <ul className="space-y-2 pl-13">
                                {category.subcategories.map((sub) => (
                                  <li key={sub.id}>
                                    <Link 
                                      to={`/products/${category.id}/${sub.id}`}
                                      className="text-sm text-gray-600 hover:text-red-600 transition-colors flex items-center group"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 group-hover:bg-red-600 transition-colors" />
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <Link 
                          to="/products"
                          className="flex items-center justify-center text-sm text-red-600 hover:text-red-700 font-medium"
                        >
                          View All Products
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                isActive('/about') 
                  ? 'text-red-600' 
                  : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                isActive('/blog') 
                  ? 'text-red-600' 
                  : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/downloads" 
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                isActive('/downloads') 
                  ? 'text-red-600' 
                  : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Downloads
            </Link>
            <Link 
              to="/ohms-law" 
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                isActive('/ohms-law') 
                  ? 'text-red-600' 
                  : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Tools
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                isActive('/contact') 
                  ? 'text-red-600' 
                  : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              size="sm"
              variant="outline"
              className={`transition-all border-2 ${
                isScrolled 
                  ? 'border-red-600 text-red-600 bg-transparent hover:bg-red-50' 
                  : 'border-transparent bg-white/90 text-gray-900 hover:bg-white'
              }`}
              asChild
            >
              <a href="tel:+917942558620">
                <Phone className="w-4 h-4 mr-1" />
                Call Now
              </a>
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className={`transition-all border-2 ${
                isScrolled 
                  ? 'border-red-600 text-red-600 bg-transparent hover:bg-red-50' 
                  : 'border-transparent bg-white/90 text-gray-900 hover:bg-white'
              }`}
              asChild
            >
              <Link to="/contact?quote=true">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                <Link 
                  to="/" 
                  className="block text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                >
                  Home
                </Link>
                
                {/* Mobile Products Menu */}
                <div>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'mobile-products' ? null : 'mobile-products')}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                  >
                    Products
                    <ChevronDown className={`w-5 h-5 transition-transform ${
                      activeDropdown === 'mobile-products' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-products' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 ml-4 space-y-4 overflow-hidden"
                      >
                        {categories.map((category) => (
                          <div key={category.id}>
                            <Link 
                              to={`/products/${category.id}`}
                              className="block font-medium text-gray-800 hover:text-red-600 transition-colors"
                            >
                              {category.name}
                            </Link>
                            <ul className="mt-2 ml-4 space-y-2">
                              {category.subcategories.map((sub) => (
                                <li key={sub.id}>
                                  <Link 
                                    to={`/products/${category.id}/${sub.id}`}
                                    className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/about" 
                  className="block text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                >
                  About
                </Link>
                <Link 
                  to="/blog" 
                  className="block text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                >
                  Blog
                </Link>
                <Link 
                  to="/downloads" 
                  className="block text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                >
                  Downloads
                </Link>
                <Link 
                  to="/ohms-law" 
                  className="block text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                >
                  Tools
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-lg font-medium text-gray-900 hover:text-red-600 transition-colors"
                >
                  Contact
                </Link>
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline"
                    className="flex-1 border-red-600 text-red-600 hover:bg-red-50 bg-transparent border-2"
                    asChild
                  >
                    <a href="tel:+917942558620">
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-red-600 text-red-600 hover:bg-red-50 bg-transparent border-2"
                    asChild
                  >
                    <Link to="/contact?quote=true">Get Quote</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
