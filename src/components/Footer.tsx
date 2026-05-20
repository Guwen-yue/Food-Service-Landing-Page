import { footerContent } from '../data/content';
import Button from './ui/Button';

export default function Footer() {
  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="text-2xl font-extrabold tracking-tight text-white">
              Foodiez
            </a>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-xs">
              Delicious food from the best local restaurants, delivered to your doorstep in minutes.
            </p>
            <div className="flex gap-4 mt-6">
              {footerContent.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center text-sm font-medium"
                  aria-label={link.name}
                >
                  {link.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerContent.footerNav.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerContent.footerNav.slice(3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App download */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get the App</h3>
            <div className="flex flex-col gap-3">
              <Button variant="primary" size="sm" className="w-full">
                App Store
              </Button>
              <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white hover:text-dark">
                Google Play
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">{footerContent.copyright}</p>
          <p className="text-gray-500 text-sm">Made with love for food lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
}
