import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

export function PageHero({
  title,
  subtitle,
  description,
  image,
  ctaText,
  ctaLink,
  ctaSecondaryText,
  ctaSecondaryLink,
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center px-6 lg:px-[6vw] pt-32 pb-20">
        <div className="max-w-2xl">
          {subtitle && (
            <span className="text-copper text-xs font-semibold tracking-[0.14em] uppercase mb-4 block">
              {subtitle}
            </span>
          )}
          <h1 className="font-display font-bold text-white text-display-1 mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              {description}
            </p>
          )}
          
          {(ctaText || ctaSecondaryText) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaText && ctaLink && (
                <Link to={ctaLink}>
                  <Button
                    className="bg-copper hover:bg-copper/90 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-copper/25 transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
              {ctaSecondaryText && ctaSecondaryLink && (
                <a href={ctaSecondaryLink}>
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl"
                  >
                    {ctaSecondaryText}
                  </Button>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
