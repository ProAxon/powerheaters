import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import CategoryCarousel from '@/components/CategoryCarousel';
import ProductCarousel from '@/components/ProductCarousel';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />

      {/* Kanthal "FOR YOUR NEEDS" category carousel */}
      <CategoryCarousel title="For Your Needs" />

      {/* Kanthal-style knowledge / intro block */}
      <section className="py-14 lg:py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div>
              <h2 className="kanthal-heading mb-6">Heating Solutions Knowledge</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Gain in-depth knowledge of industrial heating elements, thermocouples, and
                temperature sensing solutions. Our comprehensive resources cover key topics to
                support your application needs:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm mb-6">
                {[
                  'Band Heaters & Nozzle Heaters',
                  'Tubular & Immersion Heaters',
                  'Thermocouples & Temperature Control',
                  'Custom Watt Density & Voltage Options',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pt-2">
              <p className="text-gray-600 leading-relaxed mb-6">
                Power Heaters is a trusted manufacturer of Industrial Heaters, Thermocouples, and
                Temperature Sensing Solutions. With over three decades of experience since 1991, we
                provide customized heating systems designed to enhance process efficiency,
                reliability, and productivity across diverse industries.
              </p>
              <Link
                to="/about"
                className="kanthal-btn"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve — wireframe section, Kanthal styling */}
      <section className="py-14 lg:py-20 bg-[var(--brand-gray-light)]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="kanthal-heading mb-10">Industries We Serve</h2>
          <div className="bg-white">
            <img
              src="/images/products-hero.jpg"
              alt="Power Heaters product catalog — industries we serve"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-sm text-gray-500 mt-5 tracking-wide">
            Plastic Processing &nbsp;&middot;&nbsp; Chemical &nbsp;&middot;&nbsp; Food &nbsp;&middot;&nbsp;
            Packaging &nbsp;&middot;&nbsp; Automotive &nbsp;&middot;&nbsp; Pharmaceutical &nbsp;&middot;&nbsp;
            Textile &nbsp;&middot;&nbsp; Heat Treatment &nbsp;&middot;&nbsp; Rubber &nbsp;&middot;&nbsp; Laboratory
          </p>
        </div>
      </section>

      {/* Product carousel — "Find the product you need" */}
      <ProductCarousel title="Find the Product You Need" />

      {/* Kanthal-style sustainability / commitment block */}
      <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="kanthal-heading mb-10">Our Commitment to Quality</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Manufacturing Since 1991',
                desc: 'Over three decades of expertise in designing and manufacturing industrial heating and sensing solutions tailored to your exact requirements.',
                image: '/images/facility.jpg',
                href: '/about',
              },
              {
                title: 'Quality Assurance & Testing',
                desc: 'Every product undergoes rigorous quality checks. We use premium-grade materials and advanced manufacturing technology for dependable performance.',
                image: '/images/heaters-category-hero.jpg',
                href: '/products',
              },
              {
                title: 'Technical Expertise & Support',
                desc: 'Our engineering team provides end-to-end support — from product selection and custom design to after-sales service and timely delivery.',
                image: '/images/about-hero.jpg',
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
