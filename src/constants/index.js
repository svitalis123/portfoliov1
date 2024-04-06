import { meta, shopify, starbucks, tesla } from "../assets/images";
import pricewise from '../assets/images/disney.png';
import merchstore from '../assets/images/merchstore.png';
import maltafresh from '../assets/images/maltafresh.png';
import todoistclone from '../assets/images/todoistclone.png';
import web3nfts from '../assets/images/web3nfts.png';
import ian from '../assets/images/ian.png';
import extension from '../assets/images/extension.png';
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    jquery,
    versioncontrol,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    snapgram,
    astro,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: jquery,
        name: "jQuery",
        type: "API",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: versioncontrol,
        name: "Version control",
        type: "Methodologies"
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: astro,
        name: "Astro",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/svitalis123',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vitalismutwiri',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Disney+ clone',
        description: 'Crafted a dynamic Disney+ clone showcasing my expertise in React for frontend development, integrated with Firebase Functions and Authentication for robust backend operations. Utilized Redux for efficient state management and Styled Components for sleek, responsive styling. This project reflects my ability to build secure, scalable, and visually compelling web applications, encapsulating the magic and user experience of Disney+.',
        link: '',
        livelink: "https://disney-fbe0d.web.app/home"
    },
    {
        iconUrl: merchstore,
        theme: 'btn-back-green',
        name: 'Merch Store',
        description: 'Developed a merch store for "IAN" featuring a robust frontend built with Next.js and TypeScript, and a backend powered by Node.js, with PostgreSQL managing the database. This comprehensive e-commerce platform includes an integrated store for managing orders, items, prices, and settings. Enhanced search functionality is powered by Algolia, offering users fast, accurate search results. ',
        link: '',
        livelink: "https://store.impactafrica.network/ke"
    },
    {
        iconUrl: maltafresh,
        theme: 'btn-back-blue',
        name: 'Maltafresh',
        description: 'Created a vibrant website for Malta Fresh Ltd, leveraging the core web technologies: JavaScript, HTML, and CSS, to build a user-centric, interactive experience. Integrated Owl Carousel to showcase products in a dynamic, responsive slider. Additionally, implemented a seamless switch between dark and light modes, enhancing user accessibility and preference. ',
        link: '',
        livelink: "https://maltafreshltd.co.ke/",
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/svitalis123',
    //     livelink: ""
    // },
    {
        iconUrl: todoistclone,
        theme: 'btn-back-black',
        name: 'Todoist Clone',
        description: "Developed a Todoist clone, leveraging React's useContext and useReducer hooks for state management, demonstrating a deep understanding of React's latest features for efficient, scalable app development. Styled with Tailwind CSS for a responsive, modern design and integrated a seamless light and dark mode switch for enhanced user experience. Incorporated Shadcn UI for ready-to-use, high-quality components",
        link: 'https://github.com/svitalis123/todoist-clone',
        livelink: "https://elaborate-bienenstitch-a84da0.netlify.app/"
    },
    // {
    //     iconUrl: web3nfts,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/svitalis123',
    //     livelink: ""
    // },
    {
        iconUrl: ian,
        theme: 'btn-back-yellow',
        name: 'Impact Africa Network',
        description: "Developed Ian's website using Django, embracing the Model-Template-View (MTV) architecture for a robust, scalable solution. Crafted to be responsive and cross-platform, ensuring seamless functionality and optimal user experience on any device. This project underscores my proficiency in leveraging Django's powerful framework to deliver high-quality web applications that meet modern standards.",
        link: '',
        livelink: "https://www.impactafrica.network/"
    },
    {
        iconUrl: extension,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'Designed a browser extension that seamlessly converts px to rem units, streamlining my development workflow and reducing development time by 5%. Its intuitive interface supports easy customization,. This tool enhances efficiency by simplifying the process of making CSS responsive, reflecting my commitment to optimizing productivity and code quality in web development projects.',
        link: 'https://github.com/svitalis123/pxtoremextension',
        livelink: "https://github.com/svitalis123/pxtoremextension"
    }
];


// 

/*
https://store.impactafrica.network/ - merch store
https://elaborate-bienenstitch-a84da0.netlify.app/ - todoist
https://maltafreshltd.co.ke/ - malta fresh
https://disney-fbe0d.web.app/ - disney clone

*/