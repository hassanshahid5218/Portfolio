// ─────────────────────────────────────────────────────────────
// Personal details, links and background. Edit this file to
// update the site's identity, contact links, experience and
// education. Every external link on the site comes from here
// or from projects.ts.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Muhammad Hassan',
  email: 'hassanshahid5218@gmail.com',

  links: {
    github: 'https://github.com/hassanshahid5218',
    linkedin: 'https://linkedin.com/in/muhammad-hassan-90866334b/',
    leetcode: 'https://leetcode.com/u/hassanshahid5218/',
  },

  hero: {
    statement:
      'Computer Science student building full-stack web applications and mobile apps.',
    supporting:
      'I work mostly in React, Node.js and MongoDB, and have taken several projects from database schema to deployed frontend, including authentication, payments and real-time features.',
  },

  glance: [
    { label: 'Studying', value: 'BS Computer Science, University of Education Lahore (Faisalabad Campus)' },
    { label: 'Working with', value: 'MERN stack, Next.js, React Native' },
    { label: 'Looking for', value: 'Software development internships and open-source collaboration' },
  ],

  about: [
    'I’m a Computer Science undergraduate who learns by building. Alongside my degree I’ve put together full-stack applications — an e-learning platform, a multi-vendor marketplace, a real estate site and a mobile expense tracker — to get comfortable on both sides of the stack.',
    'What I care about most is understanding how an application works end to end: how a request moves from a React component through an API to the database and back, where authentication belongs, and how to keep code readable enough to change later.',
    'I’m looking for software development internships where I can learn from experienced developers, and I want to start contributing to open source, where collaboration and code review are part of the work.',
  ],
} as const;

export type Experience = {
  title: string;
  org: string;
  kind: string;
  /** Set to a string like 'Mar – Jun 2025' once you want a date shown. null hides it. */
  period: string | null;
  body: string;
};

export const experience: Experience[] = [
  {
    title: 'MERN Stack Fellowship',
    org: 'DevWeekends',
    kind: 'Learning programme',
    period: null,
    body: 'Completed the fellowship and received Bronze and Silver certificates.',
  },
  {
    title: 'Open-source development',
    org: 'Current direction',
    kind: 'Learning',
    period: null,
    body: 'I want to start contributing to open-source projects and learn from code review and collaboration with experienced developers.',
  },
];

export const practice = {
  label: 'LeetCode',
  // Manually maintained. This is NOT a live statistic: update it yourself.
  solved: '120+',
  note: 'problems solved (self-reported)',
};

export const education = {
  degree: 'BS Computer Science',
  school: 'University of Education, Lahore — Faisalabad Campus',
  period: 'September 2024 – May 2028 (expected)',
  cgpa: '3.81 / 4.00',
};
