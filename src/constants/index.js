import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    dotnet,
    py,
    csharp,
    db,
    cpp,
    linux,
    manager,
    tkinter,
    online
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: db,
    },
    {
        title: ".Net Developer",
        icon: dotnet,
    },
    {
        title: "Python Developer",
        icon: py,
    },
    {
        title: "C++ Developer",
        icon: cpp,
    },
    {
        title: "C# Developer",
        icon: csharp,
    },
    
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: ".Net",
        icon: dotnet,
    },
    {
        name: "Python",
        icon: py,
    },
    {
        name: "c#",
        icon: csharp,
    },
    {
        name: "c++",
        icon: cpp,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "linux",
        icon: linux,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
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
        iconBg: "#E6DEDD",
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
        iconBg: "#383E56",
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
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Simple database manager",
        description:
            "Database manager built using windows forms",
        tags: [
            {
                name: "C#",
                color: "blue-text-gradient",
            },
            {
                name: "Sqlite",
                color: "green-text-gradient",
            },
            {
                name: ".Net",
                color: "pink-text-gradient",
            },
        ],
        image: manager,
        source_code_link: "https://github.com/Davy-G/simple-database-manager",
    },
    {
        name: "CRUD Database reader on python",
        description:
            "A project made for university. showcases my expirience with python.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "tkinter",
                color: "green-text-gradient",
            },
            {
                name: "sqlite",
                color: "pink-text-gradient",
            },
        ],
        image: tkinter,
        source_code_link: "https://github.com/Davy-G/crud-database-reader-tkinter",
    },
    {
        name: "windows activator script",
        description:
            "a simple script that i created for activating windows quickly and without hassle",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "windows",
                color: "green-text-gradient",
            },
            {
                name: "cmd",
                color: "pink-text-gradient",
            },
        ],
        image: py,
        source_code_link: "https://github.com/Davy-G/windows-activator-python",
    }, 
    {
        name: "Online Store Manager",
        description:
            "a project for azure certification (placed top 3 by score) allows a user to access fake store database and CREATE READ UPDATE DELETE data (with authentication)",
        tags: [
            {
                name: "Mvc (Model View Controller)",
                color: "blue-text-gradient",
            },
            {
                name: ".Net",
                color: "green-text-gradient",
            },
            {
                name: "C#",
                color: "pink-text-gradient",
            },
            {
                name: "ADO.NET",
                color: "yellow-text-gradient",
            },
        ],
        image: online,
        source_code_link: "https://github.com/Davy-G/Mvc-Database-Manager",
    },
    
];

export { services, technologies, experiences, testimonials, projects };
