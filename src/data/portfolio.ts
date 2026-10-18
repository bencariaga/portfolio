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
        tagline: 'Student Guidance Records & Workflow System',
        description: 'A centralized web application for the Guidance and Testing Center (GTC) at Holy Trinity College of General Santos City. Replaces physical paper filing with secure digital records and role-based staff access.',
        role: 'Full-Stack Developer',
        contributions: ['Designed PostgreSQL database tables to store student guidance files, counseling case notes, and testing records.', 'Implemented login authentication with one-time password (OTP) verification for secure administrative access.', 'Created responsive web screens using Laravel Livewire, Alpine.js, and Tailwind CSS so staff can save and update records without full page reloads.', 'Configured automated testing and deployment pipelines to Render with a managed PostgreSQL database.'],
        techStack: ['Laravel', 'Livewire', 'PHP', 'PostgreSQL', 'Tailwind CSS', 'Alpine.js', 'Render'],
        imageSrc: '/images/htcgsc-gorms.png',
        imageAlt: 'Screenshot of HTCGSC Guidance Office Records Management System dashboard',
        links: [{ text: 'Source Code', href: 'https://github.com/bencariaga/htcgsc-gorms', icon: 'fa-brands fa-github' }],
        confidentialNotice: 'Its scope is restricted to authorized school staff to protect student records and institutional database.',
    },
    {
        id: 'amping-mamans',
        title: 'AMPING Medical Assistance Monitoring and Notification System',
        tagline: 'Municipal Medical Assistance Tracker & Notifications',
        description: 'A database web application built for the Auxiliaries and Medical Program for Individuals and Needy Generals (AMPING) in General Santos City. Helps staff process assistance requests and notify residents about their application status.',
        role: 'Full-Stack Developer',
        contributions: ['Created database tables and CRUD operations to register applicants, track medical assistance categories, and keep audit histories.', 'Built an administrative review screen where staff can search, evaluate, and update application progress across review stages.', 'Added automated notification logic to inform applicants when their documents are approved or need additional requirements.', 'Designed responsive, mobile-friendly forms and dashboards with Bootstrap and JavaScript connected to Laravel Blade templates.'],
        techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        imageSrc: '/images/amping-mamans.png',
        imageAlt: 'Screenshot of AMPING Medical Assistance Monitoring and Notification System interface',
        links: [{ text: 'Source Code', href: 'https://github.com/bencariaga/amping-mamans', icon: 'fa-brands fa-github' }],
        confidentialNotice: 'Applicant data are kept private to protect citizen medical information and comply with privacy regulations.',
    },
];

export const skillGroups: SkillGroup[] = [
    {
        category: 'Backend Development',
        description: 'Server-side application logic, database integrations, and web services.',
        skills: [{ name: 'PHP', highlight: true }, { name: 'Laravel', highlight: true }, { name: 'Livewire (TALL Stack)', highlight: true }, { name: 'Node.js' }, { name: 'Composer' }, { name: 'RESTful APIs' }, { name: 'Role-Based Authentication & OTP Workflows' }],
    },
    {
        category: 'Frontend Development',
        description: 'Responsive, accessible user interfaces for desktop and mobile browsers.',
        skills: [{ name: 'HTML5 (Semantic)' }, { name: 'CSS3 / Modern CSS' }, { name: 'JavaScript (ES6+)' }, { name: 'Tailwind CSS', highlight: true }, { name: 'Alpine.js', highlight: true }, { name: 'Bootstrap' }, { name: 'Astro' }],
    },
    {
        category: 'Databases & Data Modeling',
        description: 'Relational database architecture, queries, indexing, and migrations.',
        skills: [{ name: 'MySQL', highlight: true }, { name: 'PostgreSQL', highlight: true }, { name: 'Eloquent ORM' }, { name: 'Database Migrations & Seeding' }, { name: 'SQL Query Optimization' }],
    },
    {
        category: 'Dev Tools & Hosting',
        description: 'Version control, dependency management, and cloud deployments.',
        skills: [{ name: 'Git & GitHub', highlight: true }, { name: 'NPM' }, { name: 'Render' }, { name: 'GitHub Pages' }, { name: 'Docker (Basics)' }, { name: 'Nginx (Basics)' }],
    },
    {
        category: 'Software Engineering Practices',
        description: 'Practices for building reliable, maintainable web applications.',
        skills: [{ name: 'CRUD Workflows' }, { name: 'Modular Architecture' }, { name: 'Automated Testing (PHPUnit / Pest)' }, { name: 'Systematic Debugging' }, { name: 'Web Accessibility (WCAG 2.2 AA)' }],
    },
];

export const secondarySkills = [
    { name: 'Rust', note: 'Systems programming and desktop utility development' },
    { name: 'Python', note: 'Scripting and task automation' },
    { name: 'C / C++', note: 'Foundational computer science and memory management' },
    { name: 'TypeScript', note: 'Type-safe frontend and Node development' },
    { name: 'React.js', note: 'Component-based user interface foundations' },
    { name: 'Cybersecurity Practices', note: 'Web application defense and secure coding' },
];

export const education: EducationItem = {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Holy Trinity College of General Santos City',
    location: 'General Santos City, Philippines',
    period: '2022 – 2026',
    status: 'In Progress | Class of 2026',
    highlights: ['Coursework in database systems, software engineering, and full-stack web development.', 'Created real-world web applications for municipal assistance and student recordkeeping.', 'Participated in regional IT conferences and college research symposiums.'],
};

export const credentials: CredentialItem[] = [
    {
        title: 'Computer Systems Servicing NC II',
        issuer: 'Technical Education and Skills Development Authority (TESDA)',
        date: 'September 2024',
        type: 'Certification',
        description: 'Philippine national certification covering computer assembly, operating system setup, network cabling, and hardware maintenance.',
    },
    {
        title: 'Tech Symposium',
        issuer: 'Holy Trinity College of General Santos City',
        date: 'May 2024',
        type: 'Symposium',
        description: 'Live demonstration of computer system and application projects.',
    },
    {
        title: '11th PSITS Regional Convention',
        issuer: 'Philippine Society of Information Technology Students Region 12',
        date: 'April 2023',
        type: 'Convention',
        description: 'Regional conference on technology trends and emerging technologies.',
    },
    {
        title: 'Cybercrime Awareness Seminar',
        issuer: 'PNP Anti-Cybercrime Group (ACG PRO 12)',
        date: 'March 2023',
        type: 'Seminar',
        description: 'Seminar on digital security best practices and cyber threat protection.',
    },
];

export const secondaryInterests: Interest[] = [
    {
        title: 'Low-Level Programming and Systems',
        subtitle: 'Exploration',
        description: 'Studying memory layout, hardware efficiency, and performance with languages like Rust and C/C++ to better understand how computer systems work under the hood.',
    },
    {
        title: 'Cybersecurity and Application Hardening',
        subtitle: 'Exploration',
        description: 'Learning defensive security practices, secure authentication, and input validation to keep web applications safe against common vulnerabilities.',
    },
    {
        title: 'Audio Software, Production and DJing',
        subtitle: 'Creative Pursuit',
        description: 'Studying digital audio workstation (DAW) interfaces to design simpler music production tools, alongside composing electronic music.',
    },
    {
        title: 'Writing Poems, Songs, Short Stories, and Novels',
        subtitle: 'Creative Pursuit',
        description: 'Writing lyrics and long-form fiction. A creative practice that helps improve structured communication, focus, and empathy.',
    },
];
