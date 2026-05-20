import { motion } from 'framer-motion';
import { heroContent } from '../data/content';
import AppStoreButton from './ui/AppStoreButton';
import PhoneMockup from './ui/PhoneMockup';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-white to-white pt-8 pb-16 lg:pt-12 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-dark tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl text-muted max-w-xl lg:max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            >
              {heroContent.subheadline}
            </motion.p>

            {/* Download buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <AppStoreButton
                store="apple"
                label={heroContent.appStoreLabel}
              />
              <AppStoreButton
                store="google"
                label={heroContent.googlePlayLabel}
              />
            </motion.div>

            {/* Trust stats */}
            <motion.div
              className="mt-10 flex flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
            >
              {heroContent.trustStats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-dark">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex-1 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
