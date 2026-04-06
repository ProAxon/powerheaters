// App component with routing
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/sections/Header';
import Footer from '@/sections/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import ProductsPage from '@/pages/ProductsPage';
import CategoryPage from '@/pages/CategoryPage';
import SubcategoryPage from '@/pages/SubcategoryPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import BlogPage from '@/pages/BlogPage';
import DownloadsPage from '@/pages/DownloadsPage';
import OhmsLawCalculator from '@/pages/OhmsLawCalculator';
import FloatingButtons from '@/components/FloatingButtons';
import PageLoader from '@/components/PageLoader';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Placeholder pages for other routes
const TechnologyPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Technology</h1>
      <p className="text-gray-600">Advanced manufacturing technology and processes</p>
    </div>
  </div>
);

const NewsPage = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
      <p className="text-gray-600">Latest news from Power Heaters</p>
    </div>
  </div>
);

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600">Coming soon</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <PageLoader />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />
            
            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            
            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Blog */}
            <Route path="/blog" element={<BlogPage />} />
            
            {/* Downloads */}
            <Route path="/downloads" element={<DownloadsPage />} />

            {/* Engineering Tools */}
            <Route path="/ohms-law" element={<OhmsLawCalculator />} />
            
            {/* Products - Main Landing */}
            <Route path="/products" element={<ProductsPage />} />
            
            {/* Category Pages */}
            <Route path="/products/:category" element={<CategoryPage />} />
            
            {/* Subcategory Pages */}
            <Route path="/products/:category/:subcategory" element={<SubcategoryPage />} />
            
            {/* Product Detail Pages */}
            <Route path="/products/detail/:productId" element={<ProductDetailPage />} />
            
            {/* Other Pages */}
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
            <Route path="/support" element={<PlaceholderPage title="Support" />} />
            <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
            <Route path="/cookies" element={<PlaceholderPage title="Cookie Policy" />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
