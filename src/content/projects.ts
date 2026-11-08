// ─────────────────────────────────────────────────────────────
// Project content. Everything marked "verified" below was checked
// against the repository source (dependencies, routes, controllers
// and screens), not just the README.
// ─────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  /** Specific, verified implementation details. Keep them short. */
  details: string[];
  /** One line, mono. Only what the repository really uses. */
  stack: string;
  repo: string | null;
  demo: string | null;
  /** Shown only in the dev console as a reminder; never on the page. */
  todo?: string;
};

export const projects: Project[] = [
  {
    slug: 'learnix',
    name: 'Learnix',
    kind: 'E-learning platform',
    summary:
      'A full-stack learning management system. Students register, buy and take courses; administrators build courses and run the platform from a dashboard.',
    details: [
      'Next.js (App Router, TypeScript) frontend with Redux Toolkit and RTK Query, talking to a separate Express and MongoDB API.',
      'Email-activated accounts with JWT sessions, Google and GitHub sign-in through NextAuth, and role-based access that keeps admin routes admin-only.',
      'Stripe checkout for course purchases, with order confirmation emails sent from the server.',
      'Admin dashboard for creating and editing courses, managing users and invoices, and viewing user, course and order analytics charts.',
      'Course player built on VdoCipher video, with per-course questions and answers and student reviews.',
    ],
    stack:
      'Next.js · TypeScript · Redux Toolkit · Express · MongoDB · Stripe · Cloudinary · Socket.IO',
    repo: 'https://github.com/hassanshahid5218/Learnix--E-Learning-Platform',
    demo: 'https://learnix-frontend-lyart.vercel.app/',
  },
  {
    slug: 'multivendor-marketplace',
    // U+2011 non-breaking hyphen keeps "E-Commerce" from splitting across lines.
    name: 'Multi-Vendor E‑Commerce',
    kind: 'MERN marketplace',
    summary:
      'A marketplace where buyers shop across many sellers, and each seller runs their own shop from a separate dashboard.',
    details: [
      'Separate buyer and seller accounts with JWT authentication, each with its own set of protected pages.',
      'Seller dashboard for products, events, coupon codes, orders, refunds and withdrawal requests.',
      'Cart, wishlist and a multi-step checkout with Stripe and PayPal payment options, plus order tracking.',
      'Product reviews and ratings; image uploads handled with Multer and Cloudinary.',
      'Real-time buyer and seller messaging through a standalone Socket.IO server.',
    ],
    stack:
      'React · Redux Toolkit · React Router · Express · MongoDB · Stripe · PayPal · Socket.IO · Cloudinary',
    repo: 'https://github.com/hassanshahid5218/Multivendor-Ecommerce-website',
    demo: 'https://multivendor-frontend-liart.vercel.app',
  },
  {
    slug: 'real-estate-marketplace',
    name: 'Real Estate Marketplace',
    kind: 'React and Redux web app',
    // UNVERIFIED: written from your own description. The repository could
    // not be identified from here, so none of this has been checked.
    summary:
      'A property marketplace for listing and browsing properties, with search and filtering, Google sign-in and messaging between users and property owners.',
    details: [
      'Property listing and browsing with search and filters.',
      'Google sign-in through Firebase Authentication; listing media stored in Supabase.',
      'React and Redux frontend with a backend API.',
    ],
    stack: 'React · Redux · Firebase Authentication · Supabase',
    // TODO: paste the repository URL here. A link appears automatically.
    repo: null,
    demo: null,
    todo: 'Real Estate Marketplace: add the repo URL (and demo URL if any) in src/content/projects.ts, and check the description against the code.',
  },
  {
    slug: 'expense-tracker',
    name: 'Expense Tracker',
    kind: 'React Native mobile app',
    summary:
      'A mobile app for tracking income and expenses across multiple wallets, with transaction search and weekly, monthly and yearly charts.',
    details: [
      'Expo Router navigation with separate auth, tab and modal screens.',
      'Firebase Authentication with sessions persisted on the device, and Firestore for wallets and transactions.',
      'Wallet balances are recalculated when a transaction is added, edited or deleted.',
      'Profile and wallet images uploaded to Cloudinary.',
    ],
    stack: 'React Native · Expo Router · TypeScript · Firebase · Firestore',
    repo: 'https://github.com/hassanshahid5218/expense-tracker-react-native',
    demo: null,
  },
];
