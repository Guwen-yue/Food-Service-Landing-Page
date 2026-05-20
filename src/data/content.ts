export interface NavLink {
  label: string;
  href: string;
}

export interface TrustStat {
  value: string;
  label: string;
}

export interface PartnerLogo {
  name: string;
  initials: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  location: string;
}

export interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
  imageColor: string;
  reverse?: boolean;
}

export interface AppScreen {
  id: number;
  title: string;
  color: string;
}

export const navLinks: NavLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Restaurants', href: '#social-proof' },
  { label: 'Reviews', href: '#social-proof' },
  { label: 'Download', href: '#download' },
];

export const heroContent = {
  headline: 'Delicious Food, Delivered at Lightning Speed',
  subheadline:
    'Browse hundreds of local restaurants, order your favorites in seconds, and get hot, fresh meals delivered to your doorstep in under 30 minutes.',
  appStoreLabel: 'Download on the App Store',
  googlePlayLabel: 'Get it on Google Play',
  trustStats: [
    { value: '4.9/5', label: 'App Store Rating' },
    { value: '< 30 min', label: 'Average Delivery' },
    { value: '2,000+', label: 'Partner Restaurants' },
  ] as TrustStat[],
};

export const partnerLogos: PartnerLogo[] = [
  { name: "Tony's Pizza", initials: 'TP' },
  { name: 'Sakura Sushi', initials: 'SS' },
  { name: 'Green Bowl', initials: 'GB' },
  { name: 'Burger Republic', initials: 'BR' },
  { name: 'Taco Fiesta', initials: 'TF' },
  { name: 'Pho Delight', initials: 'PD' },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'SC',
    rating: 5,
    text: 'Foodiez has completely changed how I eat. The recommendations are spot-on, and my food always arrives hot and fresh. I use it at least 3 times a week now!',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    avatar: 'MJ',
    rating: 5,
    text: 'The real-time order tracking is a game changer. I know exactly when my food is being prepared and when it will arrive. Plus, the exclusive local restaurants are incredible.',
    location: 'Austin, TX',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'ER',
    rating: 5,
    text: 'Fast checkout, great selection, and the customer support is actually helpful. Foodiez made me cancel all my other delivery app subscriptions.',
    location: 'New York, NY',
  },
];

export const steps: Step[] = [
  {
    number: 1,
    icon: '🍽️',
    title: 'Browse Restaurants',
    description:
      'Discover hundreds of top-rated local restaurants and browse menus with mouth-watering photos and honest reviews.',
  },
  {
    number: 2,
    icon: '👆',
    title: 'One-Tap Order',
    description:
      'Customize your meal, save your favorites, and check out in seconds with our lightning-fast payment system.',
  },
  {
    number: 3,
    icon: '🛵',
    title: 'Lightning Delivery',
    description:
      'Track your order in real time as our delivery partners bring your food to you — hot, fresh, and fast.',
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: 'Real-Time Order Tracking',
    description:
      'Watch your order go from the kitchen to your door with live GPS tracking. Get notified at every step — preparation, pickup, and delivery — so you always know exactly when your food arrives.',
    imageAlt: 'Order tracking interface',
    imageColor: '#FF6B35',
  },
  {
    id: 2,
    title: 'Personalized Food Recommendations',
    description:
      'Our smart algorithm learns your taste preferences and suggests dishes you will love. From dietary restrictions to cuisine cravings, Foodiez gets better the more you use it.',
    imageAlt: 'Personalized recommendations interface',
    imageColor: '#FFB347',
    reverse: true,
  },
  {
    id: 3,
    title: 'Lightning-Fast Checkout',
    description:
      'Save your payment methods, delivery addresses, and favorite orders for a checkout experience that takes under 10 seconds. Apple Pay, Google Pay, and all major cards accepted.',
    imageAlt: 'Fast checkout interface',
    imageColor: '#E55A2B',
  },
  {
    id: 4,
    title: 'Exclusive Local Gems',
    description:
      'Access restaurants that only partner with Foodiez. From hidden neighborhood bistros to award-winning kitchens, discover the best your city has to offer that you cannot find anywhere else.',
    imageAlt: 'Local restaurants interface',
    imageColor: '#FF8C60',
    reverse: true,
  },
];

export const appScreens: AppScreen[] = [
  { id: 1, title: 'Browse Menus', color: '#FF6B35' },
  { id: 2, title: 'Real-Time Track', color: '#FFB347' },
  { id: 3, title: 'Quick Checkout', color: '#E55A2B' },
  { id: 4, title: 'Rate & Review', color: '#34D399' },
  { id: 5, title: 'Get Rewards', color: '#60A5FA' },
];

export const promoBannerContent = {
  headline: 'First Order? Delivery is On Us!',
  subheadline:
    'Sign up today and enjoy free delivery on your very first order. No minimums, no strings attached — just great food, fast.',
  buttonText: 'Claim Free Delivery',
};

export const ctaContent = {
  headline: 'Download Foodiez & Get Food Faster',
  subheadline:
    'Join millions of happy food lovers. Fresh meals from the best local restaurants, delivered to your door in minutes.',
  appStoreLabel: 'Download on the App Store',
  googlePlayLabel: 'Get it on Google Play',
};

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} Foodiez. All rights reserved.`,
  socialLinks: [
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
  ],
  footerNav: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Partner With Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};
