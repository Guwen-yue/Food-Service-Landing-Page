import { motion } from 'framer-motion';
import { ctaContent } from '../data/content';
import AppStoreButton from './ui/AppStoreButton';

export default function CTASection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C60 50%, #FFB347 100%)',
        }}
      />
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <motion.h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {ctaContent.headline}
        </motion.h2>
        <motion.p
          className="mt-6 text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {ctaContent.subheadline}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AppStoreButton
            store="apple"
            label={ctaContent.appStoreLabel}
            className="bg-white text-dark hover:bg-gray-100 shadow-lg shadow-white/20"
          />
          <AppStoreButton
            store="google"
            label={ctaContent.googlePlayLabel}
            className="bg-white text-dark hover:bg-gray-100 shadow-lg shadow-white/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
