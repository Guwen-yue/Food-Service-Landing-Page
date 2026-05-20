import { motion } from 'framer-motion';
import { promoBannerContent } from '../data/content';
import Button from './ui/Button';

export default function PromoBanner() {
  return (
    <section className="bg-light-bg" aria-labelledby="promo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/3" />

          <div className="relative">
            <span className="inline-block text-5xl mb-4">🎉</span>
            <h2
              id="promo-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
            >
              {promoBannerContent.headline}
            </h2>
            <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-xl mx-auto">
              {promoBannerContent.subheadline}
            </p>
            <div className="mt-8">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 shadow-xl shadow-black/10"
              >
                {promoBannerContent.buttonText}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
