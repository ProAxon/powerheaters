import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Search,
  Mail,
} from 'lucide-react';
import { categories } from '@/data/products';
import SearchDialog from '@/components/SearchDialog';

const navLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/blog', label: 'Knowledge Hub' },
  { path: '/downloads', label: 'Downloads' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname.startsWith(path);

  const navClass = (path: string) =>
    `kanthal-nav transition-colors hover:text-gray-900 ${
      isActive(path) ? 'kanthal-nav-active' : ''
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center h-[64px]">
            {/* Logo — Kanthal style: bold red uppercase */}
            <Link to="/" className="flex-shrink-0 mr-8">
              <span
                className="text-xl font-bold uppercase tracking-tight"
                style={{ color: 'var(--brand-red)' }}
              >
                Power Heaters
              </span>
            </Link>

            {/* Centered nav */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-10">
              {/* Products dropdown — "FIND PRODUCTS BY" */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center kanthal-nav transition-colors hover:text-gray-900 ${
                    isActive('/products') ? 'kanthal-nav-active' : ''
                  }`}
                >
                  Find Products By
                  <ChevronDown
                    className={`w-3.5 h-3.5 ml-1.5 transition-transform ${
                      activeDropdown === 'products' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    >
                      <div className="bg-white shadow-xl border border-gray-100 p-8 min-w-[680px]">
                        <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                          {categories.map((category) => (
                            <div key={category.id}>
                              <Link
                                to={`/products/${category.id}`}
                                className="font-bold text-sm uppercase tracking-wide mb-3 block hover:underline"
                                style={{ color: 'var(--brand-red)' }}
                              >
                                {category.name}
                              </Link>
                              <ul className="space-y-1.5">
                                {category.subcategories.map((sub) => (
                                  <li key={sub.id}>
                                    <Link
                                      to={`/products/${category.id}/${sub.id}`}
                                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                                    >
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-5 border-t border-gray-100">
                          <Link
                            to="/products"
                            className="flex items-center justify-center text-xs font-bold uppercase tracking-widest hover:underline"
                            style={{ color: 'var(--brand-red)' }}
                          >
                            View All Products
                            <ArrowRight className="w-3.5 h-3.5 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className={navClass(link.path)}>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right utilities */}
            <div className="flex items-center gap-5 ml-auto">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-600 hover:text-gray-900 transition-colors p-1"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={2} />
              </button>

              <Link
                to="/contact"
                className={`hidden sm:inline-flex items-center gap-2 kanthal-nav transition-colors hover:text-gray-900 ${
                  isActive('/contact') ? 'kanthal-nav-active' : ''
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                Contact us
              </Link>

              <button
                className="lg:hidden p-1 text-gray-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-5 space-y-1">
                <Link
                  to="/products"
                  className={`block py-3 kanthal-nav ${isActive('/products') ? 'kanthal-nav-active' : ''}`}
                >
                  Find Products By
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-3 kanthal-nav ${isActive(link.path) ? 'kanthal-nav-active' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className={`flex items-center gap-2 py-3 kanthal-nav ${
                    isActive('/contact') ? 'kanthal-nav-active' : ''
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
