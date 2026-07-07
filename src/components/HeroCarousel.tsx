import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/constants';

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 7000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative h-[480px] md:h-[560px] lg:h-[620px] overflow-hidden bg-[#2a2a2a]">
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {HERO_SLIDES.map((slide, index) => (
            <div key={index} className="relative min-w-0 shrink-0 grow-0 basis-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.45 }}
                        className="flex gap-5 max-w-2xl"
                      >
                        <div className="kanthal-accent-bar" />
                        <div>
                          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white uppercase tracking-wide leading-tight mb-3">
                            {slide.title}
                          </h1>
                          <p className="text-sm md:text-base lg:text-lg text-white/90 uppercase tracking-widest font-medium mb-8">
                            {slide.subtitle}
                          </p>
                          <Link to={slide.cta.href} className="kanthal-btn">
                            {slide.cta.label}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kanthal-style large edge chevrons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
      </button>

      {/* Square slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 transition-all duration-200 ${
              selectedIndex === index
                ? 'bg-white'
                : 'bg-transparent border border-white/60 hover:border-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
