import { FULLSTACK_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
  PERSONAL: 'personal',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://images2.imgbox.com/9a/99/kqwtfUDq_o.png',
    title: 'Servofeat.com - Restaurant POS Systems',
    techIcons: [
      getSkillByLabel(FULLSTACK_SKILLS, 'HTML'),
      getSkillByLabel(FULLSTACK_SKILLS, 'CSS'),
      getSkillByLabel(FULLSTACK_SKILLS, 'React.js'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Redux'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Node.js'),
      getSkillByLabel(FULLSTACK_SKILLS, 'PostgreSQL'),
    ],
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It has strong authentication system with SMS OTP verification. It has Paytm Integration so that it can get money from anywhere.',
    repoLink: '',
    sourceLink: 'https://www.servofeat.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/ad/94/w5IP0ZQz_o.png',
    title: 'Acteria.com - Security Compliance Tool',
    techIcons: [
      getSkillByLabel(FULLSTACK_SKILLS, 'HTML'),
      getSkillByLabel(FULLSTACK_SKILLS, 'CSS'),
      getSkillByLabel(FULLSTACK_SKILLS, 'React.js'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Redux'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Node.js'),
      getSkillByLabel(FULLSTACK_SKILLS, 'PostgreSQL'),
    ],
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It has strong authentication system with SMS OTP verification. It has Paytm Integration so that it can get money from anywhere.',
    repoLink: '',
    sourceLink: 'https://acteria.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: 'https://images2.imgbox.com/79/5f/S3hu6kJs_o.jpg',
    title: 'Flipkart Clone - E-Commerce Project )',
    techIcons: [
      getSkillByLabel(FULLSTACK_SKILLS, 'HTML'),
      getSkillByLabel(FULLSTACK_SKILLS, 'CSS'),
      getSkillByLabel(FULLSTACK_SKILLS, 'React.js'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Redux'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Node.js'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Mongodb'),
    ],
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It has strong authentication system with SMS OTP verification. It has Paytm Integration so that it can get money from anywhere.',
    repoLink: 'https://github.com/dhavalCode/flipkart-clone',
    sourceLink: 'https://flipkart-web.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://images2.imgbox.com/dd/a3/Fcx8cjEr_o.jpg',
    title: 'Kitchen Store  - E-Commerce Java Project )',
    techIcons: [
      getSkillByLabel(FULLSTACK_SKILLS, 'HTML'),
      getSkillByLabel(FULLSTACK_SKILLS, 'CSS'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Javascript'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Bootstrap'),
      {
        label: 'Java',
        icon: 'logos:java',
      },
      getSkillByLabel(FULLSTACK_SKILLS, 'MySQL'),
    ],
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It has strong authentication system with SMS OTP verification. It has Paytm Integration so that it can get money from anywhere.',
    repoLink: 'https://github.com/dhavalcode/ecommerce-java-project',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://images2.imgbox.com/b5/bb/6f5g9QBE_o.png',
    title: 'Dev Portfolio',
    techIcons: [
      getSkillByLabel(FULLSTACK_SKILLS, 'HTML'),
      getSkillByLabel(FULLSTACK_SKILLS, 'CSS'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FULLSTACK_SKILLS, 'Next.js'),
    ],
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It has strong authentication system with SMS OTP verification. It has Paytm Integration so that it can get money from anywhere.',
    repoLink: '',
    sourceLink: 'https://flipkart-web.vercel.app/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://images2.imgbox.com/9d/d0/zdDVFtFN_o.png',
    title: 'Netflix Clone - TMDB API Project',
    techIcons: [
      getSkillByLabel(FULLSTACK_SKILLS, 'HTML'),
      getSkillByLabel(FULLSTACK_SKILLS, 'CSS'),
      getSkillByLabel(FULLSTACK_SKILLS, 'React.js'),
      getSkillByLabel(FULLSTACK_SKILLS, 'REST Api'),
    ],
    description:
      'Flipkart Clone is done with top-notch features for the entrepreneur startups like Flipkart. It has strong authentication system with SMS OTP verification. It has Paytm Integration so that it can get money from anywhere.',
    repoLink: 'https://github.com/dhavalcode/netflix-clone',
    sourceLink: 'https://netflix-clone-by-dhaval.web.app/',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
];
