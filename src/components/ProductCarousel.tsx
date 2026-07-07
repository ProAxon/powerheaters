import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';
import { getFeaturedProducts } from '@/data/products';

interface ProductCarouselProps {
  title?: string;
}

export default function ProductCarousel({ title = 'FIND THE PRODUCT YOU NEED' }: ProductCarouselProps) {
  const products = getFeaturedProducts();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-14 lg:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="kanthal-heading mb-10">{title}</h2>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-0 shrink-0 grow-0 basis-[calc(50%-12px)] sm:basis-[calc(33.333%-16px)] lg:basis-[calc(25%-18px)] xl:basis-[calc(20%-19.2px)]"
                >
                  <Link to={`/products/detail/${product.id}`} className="group block">
                    <div className="bg-white aspect-square flex items-center justify-center overflow-hidden mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3
                      className="text-xs md:text-sm font-bold uppercase tracking-wide leading-snug group-hover:underline"
                      style={{ color: 'var(--brand-red)' }}
                    >
                      {product.name}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            className="absolute -right-1 top-[38%] -translate-y-1/2 w-10 h-10 bg-[#E8E8E8] hover:bg-[#D8D8D8] flex items-center justify-center text-gray-600 transition-colors"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-xs font-bold uppercase tracking-widest hover:underline"
            style={{ color: 'var(--brand-red)' }}
          >
            View All Products
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
