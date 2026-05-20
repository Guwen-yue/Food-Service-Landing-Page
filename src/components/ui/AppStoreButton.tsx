import { motion } from 'framer-motion';

interface AppStoreButtonProps {
  store: 'apple' | 'google';
  label: string;
  className?: string;
}

export default function AppStoreButton({
  store,
  label,
  className = '',
}: AppStoreButtonProps) {
  return (
    <motion.button
      type="button"
      className={`inline-flex items-center gap-3 bg-dark text-white px-6 py-3 rounded-2xl transition-all duration-200 hover:bg-gray-800 shadow-lg shadow-dark/20 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label={label}
    >
      {store === 'apple' ? (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.35c.44-.62 1.2-1.12 1.88-1.14.11 1.42-.35 2.82-1.16 3.82-.74.88-1.93 1.56-3.1 1.48-.13-1.38.41-2.78 1.38-3.56 0 0 .66-.6 1-.6z" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.609 1.81l-.043.043A2.992 2.992 0 001 4.033v15.934a3 3 0 002.566 2.957l12.972-10.162L3.566 1.81h.043zm13.8 7.02L21.3 12l-3.89 3.17L14.5 12.9l2.91-2.07zm-1.648 5.411l-11.718 9.17a3.007 3.007 0 002.99.589l11.64-8.983-2.912-1.776zM4.043 1.987a3.007 3.007 0 00-1.282.311L14.5 11.1l2.912-1.777L4.043 1.987z" />
        </svg>
      )}
      <div className="text-left">
        <div className="text-[10px] leading-none opacity-70">
          {store === 'apple' ? 'Download on the' : 'GET IT ON'}
        </div>
        <div className="text-sm font-semibold leading-tight">
          {store === 'apple' ? 'App Store' : 'Google Play'}
        </div>
      </div>
    </motion.button>
  );
}
