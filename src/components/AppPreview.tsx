import { useRef } from 'react';
import { motion } from 'framer-motion';
import { appScreens } from '../data/content';
import SectionHeading from './ui/SectionHeading';

export default function AppPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-light-bg overflow-hidden" aria-labelledby="preview-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeading
          title="Beautifully Simple App"
          subtitle="Designed to make ordering food a joy. Here is a peek at what you will experience."
        />

        {/* Horizontal scroll container */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {appScreens.map((screen, i) => (
            <motion.div
              key={screen.id}
              className="flex-shrink-0 snap-center"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Mini phone mockup */}
              <div className="w-[200px] sm:w-[240px] h-[420px] sm:h-[500px] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl shadow-gray-300/50">
                <div
                  className="w-full h-full rounded-[2rem] flex flex-col items-center justify-center gap-4 p-5"
                  style={{
                    background: `linear-gradient(180deg, ${screen.color}15 0%, white 60%)`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-md"
                    style={{ backgroundColor: screen.color }}
                  >
                    {screen.id === 1 ? '🍽️' : screen.id === 2 ? '🛵' : screen.id === 3 ? '💳' : screen.id === 4 ? '⭐' : '🎁'}
                  </div>
                  <span className="text-gray-900 font-semibold text-sm text-center">
                    {screen.title}
                  </span>
                  <div className="w-full space-y-2.5 flex-1">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div
                        key={j}
                        className="w-full h-12 rounded-xl flex items-center gap-3 px-3"
                        style={{ backgroundColor: `${screen.color}10` }}
                      >
                        <div
                          className="w-6 h-6 rounded-md flex-shrink-0"
                          style={{ backgroundColor: `${screen.color}40` }}
                        />
                        <div className="flex-1 space-y-1">
                          <div className="h-1.5 bg-gray-300 rounded w-3/4" />
                          <div className="h-1 bg-gray-200 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-10" />
              </div>
              <p className="text-center text-sm font-medium text-muted mt-4">
                {screen.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
