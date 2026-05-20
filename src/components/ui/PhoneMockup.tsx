import { motion } from 'framer-motion';

interface PhoneMockupProps {
  color?: string;
  className?: string;
}

export default function PhoneMockup({
  color = '#FF6B35',
  className = '',
}: PhoneMockupProps) {
  return (
    <motion.div
      className={`relative mx-auto ${className}`}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Phone body */}
      <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-gray-400/40">
        {/* Screen */}
        <div
          className="w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center gap-4 p-6"
          style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}
        >
          {/* Mock content */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
            style={{ backgroundColor: color }}>
            🍕
          </div>

          <div className="text-center mt-2">
            <div className="text-gray-900 font-bold text-lg">Foodiez</div>
            <div className="text-gray-500 text-xs mt-1">Delicious food, fast</div>
          </div>

          {/* Mock cards */}
          <div className="w-full space-y-3 mt-4">
            {['#FF6B35', '#FFB347', '#34D399'].map((c, i) => (
              <motion.div
                key={i}
                className="w-full h-14 rounded-2xl flex items-center gap-3 px-4 shadow-sm"
                style={{ backgroundColor: `${c}18` }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: c }}
                />
                <div className="flex-1">
                  <div className="h-2 bg-gray-300 rounded w-3/4" />
                  <div className="h-1.5 bg-gray-200 rounded w-1/2 mt-1.5" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Delivery status bar */}
          <motion.div
            className="w-full h-12 rounded-2xl flex items-center gap-3 px-4 mt-2 shadow-md"
            style={{ backgroundColor: color }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <span className="text-lg">🛵</span>
            <span className="text-white font-semibold text-sm">On the way!</span>
            <span className="text-white/80 text-xs ml-auto">5 min</span>
          </motion.div>
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-10" />
      </div>

      {/* Floating card */}
      <motion.div
        className="absolute -right-8 top-24 bg-white rounded-2xl shadow-xl px-4 py-3 hidden sm:flex items-center gap-3"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-2xl">⭐</span>
        <div>
          <div className="font-bold text-dark text-sm">4.9 Rating</div>
          <div className="text-muted text-xs">10K+ reviews</div>
        </div>
      </motion.div>

      {/* Floating delivery time card */}
      <motion.div
        className="absolute -left-6 bottom-32 bg-white rounded-2xl shadow-xl px-4 py-3 hidden sm:flex items-center gap-3"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <span className="text-2xl">⚡</span>
        <div>
          <div className="font-bold text-dark text-sm">Under 30 min</div>
          <div className="text-muted text-xs">Average delivery</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
