import { motion } from 'framer-motion';
import { steps } from '../data/content';
import SectionHeading from './ui/SectionHeading';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-light-bg"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeading
          title="How It Works"
          subtitle="Getting your favorite meals has never been easier. Just three simple steps."
          id="how-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-primary/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/30" />
                </div>
              )}

              <div className="relative inline-flex">
                <div className="w-32 h-32 rounded-3xl bg-white shadow-lg shadow-gray-100 flex items-center justify-center text-5xl transform transition-transform hover:scale-105 duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {step.number}
                </div>
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-dark">
                {step.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
