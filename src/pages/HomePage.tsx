import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCarousel from '@/components/ProductCarousel';
import { categories } from '@/data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />

      {/* Industries We Serve — product parent categories */}
      <section className="py-14 lg:py-20 bg-[var(--brand-gray-light)]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="kanthal-heading mb-3">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mb-10">
            Explore our complete range of industrial heating and temperature sensing solutions.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const cover =
                category.subcategories[0]?.products[0]?.image ?? category.heroImage;

              return (
                <Link
                  key={category.id}
                  to={`/products/${category.id}`}
                  className="group block bg-white"
                >
                  <div className="aspect-[4/3] flex items-center justify-center overflow-hidden bg-white p-4">
                    <img
                      src={cover}
                      alt={category.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="kanthal-accent-yellow mb-3" />
                    <h3
                      className="text-sm font-bold uppercase tracking-wide mb-2 group-hover:underline"
                      style={{ color: 'var(--brand-red)' }}
                    >
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">{category.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product carousel — "Find the product you need" */}
      <ProductCarousel title="Find the Product You Need" />

      {/* Commitment to quality — grounded product photos */}
      <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="kanthal-heading mb-10">Our Commitment to Quality</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Manufacturing Since 1991',
                desc: 'Over three decades of expertise designing and manufacturing industrial heating and sensing solutions tailored to your exact requirements.',
                image: '/images/MICA BAND HEATER.JPG',
                href: '/about',
              },
              {
                title: 'Quality Assurance & Testing',
                desc: 'Every product undergoes rigorous quality checks using premium-grade materials for dependable, long-lasting performance.',
                image: '/images/COIL HEATERS.JPG',
                href: '/products',
              },
              {
                title: 'Technical Expertise & Support',
                desc: 'Our engineering team provides end-to-end support — from product selection and custom design to after-sales service and timely delivery.',
                image: '/images/CARTRIDGE HEATERS.JPG',
                href: '/contact',
              },
            ].map((card) => (
              <Link key={card.title} to={card.href} className="group">
                <div className="aspect-[16/10] overflow-hidden mb-5 bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="text-sm font-bold uppercase tracking-wide mb-2 group-hover:underline"
                  style={{ color: 'var(--brand-red)' }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{card.desc}</p>
                <span
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest"
                  style={{ color: 'var(--brand-red)' }}
                >
                  Read more
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
