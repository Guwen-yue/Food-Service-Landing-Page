import { motion } from 'framer-motion';
import { features } from '../data/content';
import SectionHeading from './ui/SectionHeading';

function FeatureRow({
  title,
  description,
  imageColor,
  imageAlt: _imageAlt,
  reverse = false,
}: {
  title: string;
  description: string;
  imageColor: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Image side */}
      <div className="flex-1 w-full max-w-lg lg:max-w-none">
        <div
          className="relative w-full aspect-[4/3] rounded-[2.5rem] shadow-xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${imageColor}20 0%, ${imageColor}08 100%)`,
          }}
        >
          {/* Decorative phone mockup inside */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[160px] sm:w-[200px] h-[340px] sm:h-[400px] bg-white rounded-[2rem] shadow-2xl border-4 border-gray-200 p-3">
            <div
              className="w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3 p-4"
              style={{ backgroundColor: `${imageColor}12` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: imageColor }}
              >
                <span className="text-white text-sm font-bold">F</span>
              </div>
              <div className="w-full space-y-2">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="w-full h-10 rounded-lg"
                    style={{ backgroundColor: `${imageColor}18` }}
                  />
                ))}
              </div>
              <div
                className="w-3/4 h-8 rounded-lg mt-auto"
                style={{ backgroundColor: imageColor }}
              />
            </div>
          </div>
          {/* Abstract shapes */}
          <div
            className="absolute left-8 bottom-8 w-24 h-24 rounded-full opacity-20"
            style={{ backgroundColor: imageColor }}
          />
          <div
            className="absolute left-20 top-8 w-16 h-16 rounded-2xl opacity-15 rotate-12"
            style={{ backgroundColor: imageColor }}
          />
        </div>
      </div>

      {/* Text side */}
      <div className="flex-1 text-center lg:text-left">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dark tracking-tight">
          {title}
        </h3>
        <p className="mt-4 text-lg text-muted leading-relaxed max-w-lg lg:max-w-none">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeading
          title="Why You'll Love Foodiez"
          subtitle="Everything you need to discover, order, and enjoy amazing food — all in one app."
          id="features-heading"
        />
        <div className="space-y-20 lg:space-y-28">
          {features.map((feature) => (
            <FeatureRow
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageColor={feature.imageColor}
              imageAlt={feature.imageAlt}
              reverse={feature.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
