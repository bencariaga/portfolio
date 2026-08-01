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
}

export interface Project {
    title: string;
    description: string;
    techStack: string;
    imageSrc: string;
    imageAlt: string;
    links: ProjectLink[];
}

export interface Experience {
    role: string;
    company: string;
    companyUrl: string;
    period: string;
    logo: string;
    responsibilities: string[];
}

export interface Skill {
    name: string;
    url: string;
    status: 'current' | 'wanted';
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    logo: string;
}

export interface Stat {
    value: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Interests', href: '#interests' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
    {
        name: 'Email',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=bencariaga13@gmail.com',
        iconClass: 'fa-solid fa-envelope',
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/blc.423',
        iconClass: 'fa-brands fa-facebook',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/bencariaga',
        iconClass: 'fa-brands fa-github',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/benhur-cariaga/',
        iconClass: 'fa-brands fa-linkedin',
    } /*
    {
        name: 'Facebook Messenger',
        href: 'https://www.facebook.com/messages/e2ee/t/1387250853134556',
        iconClass: 'fa-brands fa-facebook-messenger',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/nimus.yellow/',
        iconClass: 'fa-brands fa-instagram',
    },
    {
        name: 'Twitter / X',
        href: 'https://x.com/bencariaga',
        iconClass: 'fa-brands fa-twitter',
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@benhurcariaga',
        iconClass: 'fa-brands fa-youtube',
    }, */,
];

export const interests: Interest[] = [
    {
        title: 'Web Development',
        subtitle: '1st Priority',
        description: 'This is where I am most familiar with. I have an experience creating a few locally hosted websites that heavily implement CRUD (Create, Read, Update, Delete) operations for over 2 years, written in languages, in both vanilla and several libraries and frameworks.',
    },
    {
        title: 'Low-Level Programming',
        subtitle: '2nd Priority',
        description: 'This is where I want to learn next, because I want build the desktop app Needle, which needs attention in keeping consistently good performance with proper memory management. I want to learn how to properly manage the memory in a manual manner.',
    },
    {
        title: 'Cybersecurity',
        subtitle: '3rd Priority',
        description: 'I learned some basics of it, and I applied it to the past websites I worked with, but I have yet to apply more of what I learned in future websites to create. I want to learn more about security on cyberspace, such as how to properly secure websites from possible future attacks.',
    },
    {
        title: 'Music Production & DJing',
        subtitle: '4th Priority',
        description: 'The first three priorities would help me build, maintain, and use Needle for making and playing with beats. Someone might ask me: "Why don\'t you just use any existing DAW, something like Ableton or FL Studio?" My answer? They are visually overwhelming and difficult to use. I want to create a DAW to solve these problems by making the user interface of the DAW easier to read, while keeping what features that makes Needle a DAW.',
    },
    {
        title: 'Songwriting',
        subtitle: '5th Priority',
        description: 'On top of wanting to create the vocal and instrumental parts of songs with my DAW desktop app Needle, I also want to write lyrics into these songs. I want to create songs that could potentially make people feel the same or similar emotions I would feel when I would first listen to them.',
    },
    {
        title: 'Novel Writing',
        subtitle: '6th Priority',
        description: 'Aside from writing code and songs, I also would like to write novels that reflect certain chapters in my life. I look forward for the novels I would write and publish in the future to make a difference on other people who might or might not have life experiences similar to mine, as well as in my home country and the world.',
    },
];

export const projects: Project[] = [
    {
        title: 'AMPING Medical Assistance Monitoring and Notification System',
        description: 'A computer system for monitoring digital document data and notifying applicants in medical assistance of the Auxiliaries and Medical Program for Individuals and Needy Generals (AMPING).',
        techStack: 'Laravel, MySQL, Bootstrap',
        imageSrc: '/images/amping-mamans.png',
        imageAlt: 'AMPING Medical Assistance Monitoring and Notification System',
        links: [{ text: 'Source Code', href: 'https://github.com/bencariaga/amping-mamans' }],
    },
    {
        title: 'HTCGSC Guidance Office Records Management System',
        description: 'A computer system designed for monitoring data of the Guidance and Testing Center (GTC) of the school and for notifying GTC employees and Holy Trinity College of General Santos City (HTCGSC) students.',
        techStack: 'Laravel, Livewire, PostgreSQL, Render, Alpine.js, Tailwind CSS',
        imageSrc: '/images/htcgsc-gorms.png',
        imageAlt: 'HTCGSC Guidance Office Records Management System',
        links: [{ text: 'Source Code', href: 'https://github.com/bencariaga/htcgsc-gorms' }],
    },
    {
        title: 'Needle (Currently Worked On)',
        description: 'A desktop app with the visual simplicity of an audio editor (like Audacity) and the featural sophistication of a DAW.',
        techStack: 'Tailwind CSS, TypeScript, React, Rust, Tauri',
        imageSrc: '/images/needle-daw.png',
        imageAlt: 'Needle Digital Audio Workstation',
        links: [{ text: 'Source Code', href: 'https://github.com/bencariaga/needle' }],
    },
];

export const skills: SkillCategory[] = [
    {
        category: 'Languages',
        skills: [
            { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', status: 'current' },
            { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', status: 'current' },
            { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', status: 'current' },
            { name: 'TypeScript', url: 'https://www.typescriptlang.org/', status: 'current' },
            { name: 'PHP', url: 'https://www.php.net/', status: 'current' },
            { name: 'SQL', url: 'https://developer.mozilla.org/en-US/docs/Glossary/SQL', status: 'current' },
            { name: 'Rust', url: 'https://www.rust-lang.org/', status: 'wanted' },
            { name: 'Python', url: 'https://www.python.org/', status: 'wanted' },
            { name: 'C', url: 'https://www.c-language.org/', status: 'wanted' },
            { name: 'C++', url: 'https://isocpp.org/', status: 'wanted' },
        ],
    },
    {
        category: 'Frontend',
        skills: [
            { name: 'Bootstrap', url: 'https://getbootstrap.com/', status: 'current' },
            { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', status: 'current' },
            { name: 'Astro.js', url: 'https://astro.build/', status: 'current' },
            { name: 'Alpine.js', url: 'https://alpinejs.dev/', status: 'current' },
            { name: 'React.js', url: 'https://react.dev/', status: 'current' },
            { name: 'Sass', url: 'https://sass-lang.com/', status: 'wanted' },
            { name: 'Svelte.js', url: 'https://svelte.dev/', status: 'wanted' },
            { name: 'Solid.js', url: 'https://solidjs.com/', status: 'wanted' },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', url: 'https://nodejs.org/en', status: 'current' },
            { name: 'NPM', url: 'https://www.npmjs.com/', status: 'current' },
            { name: 'Composer', url: 'https://getcomposer.org/', status: 'current' },
            { name: 'Git', url: 'https://git-scm.com/', status: 'current' },
            { name: 'Laravel', url: 'https://laravel.com/', status: 'current' },
            { name: 'Livewire', url: 'https://livewire.laravel.com/', status: 'current' },
            { name: 'Cargo', url: 'https://doc.rust-lang.org/cargo', status: 'wanted' },
            { name: 'Tauri', url: 'https://v2.tauri.app/', status: 'wanted' },
            { name: 'PIP', url: 'https://www.python.org/pip/', status: 'wanted' },
            { name: 'CMake', url: 'https://cmake.org/', status: 'wanted' },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'MySQL', url: 'https://www.mysql.com/', status: 'current' },
            { name: 'PostgreSQL', url: 'https://www.postgresql.org/', status: 'wanted' },
            { name: 'SQLite', url: 'https://www.sqlite.org/', status: 'wanted' },
            { name: 'Redis', url: 'https://redis.io/', status: 'wanted' },
        ],
    },
    {
        category: 'Development Operations',
        skills: [
            { name: 'GitHub', url: 'https://github.com/', status: 'current' },
            { name: 'Docker', url: 'https://www.docker.com/', status: 'wanted' },
            { name: 'Kubernetes', url: 'https://kubernetes.io/', status: 'wanted' },
        ],
    },
    {
        category: 'Cloud',
        skills: [
            { name: 'GitHub Pages', url: 'https://docs.github.com/en/pages', status: 'current' },
            { name: 'Render', url: 'https://render.com/', status: 'wanted' },
            { name: 'Netlify', url: 'https://www.netlify.com/', status: 'wanted' },
        ],
    },
];
