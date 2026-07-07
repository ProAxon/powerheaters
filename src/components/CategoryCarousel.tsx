import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';
import { categories } from '@/data/products';

interface CategoryCarouselProps {
  title?: string;
}

export default function CategoryCarousel({ title = 'FOR YOUR NEEDS' }: CategoryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
  });

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="kanthal-heading mb-10">{title}</h2>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {categories.map((category) => {
                const coverImage =
                  category.subcategories[0]?.products[0]?.image ?? category.heroImage;

                return (
                  <div
                    key={category.id}
                    className="min-w-0 shrink-0 grow-0 basis-[calc(50%-12px)] sm:basis-[calc(33.333%-16px)] lg:basis-[calc(25%-18px)] xl:basis-[calc(20%-19.2px)]"
                  >
                    <Link
                      to={`/products/${category.id}`}
                      className="group block"
                    >
                      <div className="bg-white aspect-[4/3] flex items-center justify-center overflow-hidden mb-4">
                        <img
                          src={coverImage}
                          alt={category.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3
                        className="text-xs md:text-sm font-bold uppercase tracking-wide leading-snug group-hover:underline"
                        style={{ color: 'var(--brand-red)' }}
                      >
                        {category.name}
                      </h3>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kanthal-style right arrow */}
          <button
            onClick={scrollNext}
            className="absolute -right-1 top-[38%] -translate-y-1/2 w-10 h-10 bg-[#E8E8E8] hover:bg-[#D8D8D8] flex items-center justify-center text-gray-600 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
