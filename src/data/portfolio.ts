export interface NavLink {
    name: string;
    href: string;
}

export interface SocialLink {
    name: string;
    href: string;
    iconClass: string;
}

export interface Interest {
    title: string;
    subtitle: string;
    description: string;
}

export interface ProjectLink {
    text: string;
    href: string;
    icon?: string;
}

export interface Project {
    id: string;
    title: string;
    tagline: string;
    description: string;
    role: string;
    contributions: string[];
    techStack: string[];
    imageSrc: string;
    imageAlt: string;
    links: ProjectLink[];
    confidentialNotice?: string;
}

export interface SkillItem {
    name: string;
    badge?: string;
    highlight?: boolean;
}

export interface SkillGroup {
    category: string;
    description: string;
    skills: SkillItem[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    status: string;
    location: string;
    highlights?: string[];
}

export interface CredentialItem {
    title: string;
    issuer: string;
    date: string;
    type: 'Certification' | 'Seminar' | 'Convention' | 'Symposium';
    description?: string;
}

export const navLinks: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Secondary Interests', href: '#interests' },
    { name: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        href: 'https://github.com/bencariaga',
        iconClass: 'fa-brands fa-github',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/benhur-cariaga/',
        iconClass: 'fa-brands fa-linkedin',
    },
    {
        name: 'Email',
        href: 'mailto:bencariaga13@gmail.com',
        iconClass: 'fa-solid fa-envelope',
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/blc.423',
        iconClass: 'fa-brands fa-facebook',
    },
];

export const featuredProjects: Project[] = [
    {
        id: 'htcgsc-gorms',
        title: 'HTCGSC Guidance Office Records Management System',
        tagline: 'Administrative Workflow & Records Management Platform',
        description: 'A centralized records management system developed for the Guidance and Testing Center (GTC) at Holy Trinity College of General Santos City. Designed to transition paper-based student guidance records into structured digital workflows with strict role-based access control.',
        role: 'Full-Stack Developer (Database modeling, authentication workflows, core CRUD modules, Livewire state interactions, and responsive UI)',
        contributions: ['Architected database schemas and relational models to securely track student guidance profiles, case notes, and testing records.', 'Implemented authentication security workflows with one-time password (OTP) verification for verified administrative access.', 'Built responsive reactive interfaces using Laravel Livewire, Alpine.js, and Tailwind CSS for seamless data entry without full page reloads.', 'Handled automated testing routines and deployment configurations targeting PostgreSQL on Render.'],
        techStack: ['Laravel', 'Livewire', 'PHP', 'PostgreSQL', 'Tailwind CSS', 'Alpine.js', 'Render'],
        imageSrc: '/images/htcgsc-gorms.png',
        imageAlt: 'Screenshot of HTCGSC Guidance Office Records Management System dashboard',
        links: [{ text: 'Source Code', href: 'https://github.com/bencariaga/htcgsc-gorms', icon: 'fa-brands fa-github' }],
        confidentialNotice: 'Source repository may be restricted to authorized academic personnel to safeguard institutional schemas and student data privacy.',
    },
    {
        id: 'amping-mamans',
        title: 'AMPING Medical Assistance Monitoring and Notification System',
        tagline: 'Municipal Medical Assistance Tracking & Status Updates',
        description: 'A public-service database application built to streamline records intake, document status monitoring, and applicant updates for the Auxiliaries and Medical Program for Individuals and Needy Generals (AMPING) in General Santos City.',
        role: 'Full-Stack Developer (Application tracking logic, MySQL data schemas, administrative review screens, and notification flows)',
        contributions: ['Engineered full CRUD operations for registering assistance applicants, categorizing medical support types, and maintaining intake audit histories.', 'Developed administrative dashboards enabling staff to quickly filter, evaluate, and update application statuses across review stages.', 'Constructed notification dispatch logic to alert beneficiaries on approval status and requirements.', 'Integrated responsive front-end components using Bootstrap and vanilla JavaScript paired with Laravel routing and Blade architecture.'],
        techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        imageSrc: '/images/amping-mamans.png',
        imageAlt: 'Screenshot of AMPING Medical Assistance Monitoring and Notification System interface',
        links: [{ text: 'Source Code', href: 'https://github.com/bencariaga/amping-mamans', icon: 'fa-brands fa-github' }],
        confidentialNotice: 'Source code and applicant data are kept private in compliance with beneficiary privacy and municipal data management policies.',
    },
];

export const skillGroups: SkillGroup[] = [
    {
        category: 'Backend Development',
        description: 'Core expertise in building structured, secure, and maintainable server-side web applications.',
        skills: [{ name: 'PHP', highlight: true }, { name: 'Laravel', highlight: true }, { name: 'Livewire (TALL Stack)', highlight: true }, { name: 'Node.js' }, { name: 'Composer' }, { name: 'RESTful API Design' }, { name: 'Role-Based Authentication & OTP Workflows' }],
    },
    {
        category: 'Frontend Development',
        description: 'Creating accessible, responsive, and mobile-friendly web interfaces.',
        skills: [{ name: 'HTML5 (Semantic)' }, { name: 'CSS3 / Modern CSS' }, { name: 'JavaScript (ES6+)' }, { name: 'Tailwind CSS', highlight: true }, { name: 'Alpine.js', highlight: true }, { name: 'Bootstrap' }, { name: 'Astro' }],
    },
    {
        category: 'Databases & Data Modeling',
        description: 'Relational data design, migrations, indexing, and transactional integrity.',
        skills: [{ name: 'MySQL', highlight: true }, { name: 'PostgreSQL', highlight: true }, { name: 'Eloquent ORM' }, { name: 'Database Migrations & Seeding' }, { name: 'SQL Query Optimization' }],
    },
    {
        category: 'Dev Tools & Infrastructure',
        description: 'Version control, packaging, continuous integration, and cloud hosting.',
        skills: [{ name: 'Git & GitHub', highlight: true }, { name: 'NPM' }, { name: 'Render' }, { name: 'GitHub Pages' }, { name: 'Docker (Foundation)' }, { name: 'Nginx (Basics)' }],
    },
    {
        category: 'Software Engineering Practices',
        description: 'Systematic approaches to maintainable, reliable software delivery.',
        skills: [{ name: 'CRUD Application Workflows' }, { name: 'Modular Code Architecture' }, { name: 'Automated Testing (PHPUnit / Pest basics)' }, { name: 'Systematic Debugging' }, { name: 'Web Accessibility (WCAG 2.2 AA standards)' }],
    },
];

export const secondarySkills = [
    { name: 'Rust', note: 'Active exploration for systems & desktop utilities' },
    { name: 'Python', note: 'Scripting & automation basics' },
    { name: 'C / C++', note: 'Foundational computer science & memory concepts' },
    { name: 'TypeScript', note: 'Typed frontend & Node development' },
    { name: 'React.js', note: 'Component-driven UI foundations' },
    { name: 'Cybersecurity Practices', note: 'Defensive web security & application hardening' },
];

export const education: EducationItem = {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Holy Trinity College of General Santos City',
    location: 'General Santos City, Philippines',
    period: '2022 – 2026',
    status: 'In Progress / Class of 2026',
    highlights: ['Curriculum focus on database management systems, software engineering, and web development.', 'Developed real-world systems addressing institutional recordkeeping and municipal assistance challenges.', 'Active participant in regional computing and IT research symposiums.'],
};

export const credentials: CredentialItem[] = [
    {
        title: 'Computer Systems Servicing NC II',
        issuer: 'Technical Education and Skills Development Authority (TESDA)',
        date: 'September 2024',
        type: 'Certification',
        description: 'National certification in computer hardware assembly, software installation, network configuration, and system maintenance.',
    },
    {
        title: 'Tech Symposium',
        issuer: 'Holy Trinity College of General Santos City',
        date: 'May 2024',
        type: 'Symposium',
        description: 'Academic presentation and demonstration of technological innovations and software projects.',
    },
    {
        title: '11th PSITS Regional Convention',
        issuer: 'Philippine Society of Information Technology Students (PSITS Region 12)',
        date: 'April 2023',
        type: 'Convention',
        description: 'Regional gathering of IT students focusing on emerging industry trends, cloud tech, and developer practices.',
    },
    {
        title: 'Cybercrime Awareness Seminar',
        issuer: 'PNP Anti-Cybercrime Group (ACG PRO 12)',
        date: 'March 2023',
        type: 'Seminar',
        description: 'Seminar covering cybersecurity hygiene, threat landscape awareness, and safe digital systems stewardship.',
    },
];

export const secondaryInterests: Interest[] = [
    {
        title: 'Low-Level Programming & Systems',
        subtitle: 'Exploration',
        description: 'Deepening comprehension of memory layout, hardware boundaries, and performance optimization through languages like Rust and C/C++. Interested in how low-level efficiency powers resilient software.',
    },
    {
        title: 'Cybersecurity & Defensive Web Design',
        subtitle: 'Exploration',
        description: 'Studying authentication protocols, input validation safeguards, and OWASP principles to ensure applications remain robust against common threat vectors and data leaks.',
    },
    {
        title: 'Audio Software, Production & DJing',
        subtitle: 'Creative Pursuit',
        description: 'Exploring the architecture of digital audio workstations (DAWs) with a focus on intuitive user interface design, alongside electronic music production and performance.',
    },
    {
        title: 'Songwriting & Creative Writing',
        subtitle: 'Creative Pursuit',
        description: 'Writing song lyrics and long-form fiction. A complementary creative discipline that sharpens storytelling, structured thinking, and empathy in communication.',
    },
];
