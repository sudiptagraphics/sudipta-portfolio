export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  tech: string[]
  year: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Xempla Enterprise Dashboard',
    description:
      'Complete redesign and development of enterprise SaaS dashboard. Improved user efficiency by 40% with AI-assisted workflow optimization.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['design', 'development', 'saas'],
    tech: ['Figma', 'React', 'Next.js', 'SCSS'],
    year: '2024',
  },
  {
    id: 2,
    title: 'FinTrack Analytics Platform',
    description:
      'End-to-end design and frontend for financial analytics SaaS. Built scalable component library used across 12 product modules.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['design', 'development', 'saas'],
    tech: ['Adobe XD', 'Angular', 'TypeScript', 'SCSS'],
    year: '2023',
  },
  {
    id: 3,
    title: 'HealthSync Mobile App',
    description:
      'Cross-platform healthcare application design. Conducted extensive user research resulting in 95% user satisfaction score.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['design'],
    tech: ['Figma', 'Prototyping', 'User Research'],
    year: '2023',
  },
  {
    id: 4,
    title: 'E-Commerce Platform Redesign',
    description:
      'Complete frontend overhaul for major e-commerce platform. Reduced page load time by 60% and increased conversion by 25%.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['development', 'saas'],
    tech: ['React', 'Next.js', 'SCSS', 'Performance'],
    year: '2022',
  },
]

export const techStack: string[] = [
  'React',
  'Next.js',
  'Angular',
  'TypeScript',
  'JavaScript',
  'SCSS',
  'Tailwind CSS',
  'Figma',
  'Adobe XD',
  'Git',
  'REST APIs',
  'GraphQL',
  'Framer Motion',
  'Jest',
  'Cypress',
]

export const experiences = [
  {
    title: 'Senior Product Designer',
    company: 'Xempla',
    period: '2022 - Present',
    description:
      'Leading product design initiatives for enterprise SaaS platform. Implementing AI-assisted design workflows and converting designs to production React/Next.js code.',
    tech: ['Figma', 'React', 'Next.js', 'AI/UX'],
  },
  {
    title: 'Product Designer & Frontend Lead',
    company: 'SaaS Startup',
    period: '2018 - 2022',
    description:
      'Designed and built multiple SaaS applications from ground up. Established design systems and component libraries. Reduced development time by 40% through reusable components.',
    tech: ['Adobe XD', 'Angular', 'SCSS', 'TypeScript'],
  },
  {
    title: 'UI/UX Designer',
    company: 'Digital Agency',
    period: '2015 - 2018',
    description:
      'Created user interfaces for 30+ client projects. Specialized in responsive design and early adoption of CSS preprocessors. Transitioned into frontend development.',
    tech: ['Photoshop', 'HTML/CSS', 'JavaScript'],
  },
  {
    title: 'Junior Designer',
    company: 'Creative Studio',
    period: '2013 - 2015',
    description:
      'Started my journey in digital design. Learned fundamentals of visual design, typography, and user-centered thinking. Built first websites from scratch.',
    tech: ['Illustrator', 'HTML', 'CSS'],
  },
]
