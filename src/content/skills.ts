// ─────────────────────────────────────────────────────────────
// Technologies I have worked with. This is NOT a proficiency
// ranking. `core: true` only means "central to the work I
// describe", and gives the item slightly heavier type.
//
// Items marked `added` were not in the original CV list but are
// used in the inspected repositories. Delete any you disagree with.
// ─────────────────────────────────────────────────────────────

export type Skill = { name: string; core?: boolean; added?: boolean };
export type SkillGroup = { label: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', core: true },
      { name: 'TypeScript', added: true },
      { name: 'C++' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React.js', core: true },
      { name: 'Next.js', added: true },
      { name: 'Redux Toolkit' },
      { name: 'React Router' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'Axios' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', core: true },
      { name: 'Express.js', core: true },
      { name: 'REST APIs', core: true },
    ],
  },
  {
    label: 'Data and services',
    items: [
      { name: 'MongoDB', core: true },
      { name: 'Mongoose', core: true },
      { name: 'Firebase Authentication' },
      { name: 'Firestore', added: true },
      { name: 'Supabase' },
      { name: 'Cloudinary' },
      { name: 'Appwrite' },
    ],
  },
  {
    label: 'Auth and app features',
    items: [
      { name: 'JWT', core: true },
      { name: 'bcrypt.js' },
      { name: 'Role-based authorization' },
      { name: 'CRUD operations' },
      { name: 'Payment integrations (Stripe, PayPal)' },
      { name: 'Real-time features with Socket.IO' },
    ],
  },
  {
    label: 'Mobile',
    items: [
      { name: 'React Native', core: true },
      { name: 'Expo' },
      { name: 'Expo Router' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'VS Code' },
      { name: 'Vercel' },
      { name: 'Docker' },
    ],
  },
];
