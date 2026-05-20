import { motion } from 'framer-motion';
import { partnerLogos, testimonials } from '../data/content';
import SectionHeading from './ui/SectionHeading';
import TestimonialCard from './ui/TestimonialCard';

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="bg-white"
      aria-labelledby="social-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Partner logos */}
        <motion.div
          className="mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm font-semibold text-muted uppercase tracking-wider mb-8">
            Trusted by 2,000+ restaurants nationwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-3 bg-light-bg rounded-2xl px-5 py-3 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary font-bold flex items-center justify-center text-sm">
                  {logo.initials}
                </div>
                <span className="text-sm font-semibold text-dark whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <SectionHeading
          title="What Food Lovers Say"
          subtitle="Thousands of happy customers trust Foodiez for their daily meals."
          id="social-heading"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <TestimonialCard
                name={testimonial.name}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                text={testimonial.text}
                location={testimonial.location}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
