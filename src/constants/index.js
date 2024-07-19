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
    threejs,
    dotnet,
    py,
    csharp,
    db,
    cpp,
    linux,
    manager,
    tkinter,
    online,
    dbwf, github, fastapi
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
    {
        title: "Fastapi Developer",
        icon: fastapi,
    },
    {
        title: "Linux Administrator",
        icon: linux,
    }
    
    
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
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "github",
        icon: github,
    },
    {
        name: "fastapi",
        icon: fastapi,
    },
];

const experiences = [
    {}
];

const testimonials = [
    {
    }
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
            "a project for azure certification (placed top 3 by score) allows a user, to access fake store database and CREATE READ UPDATE DELETE data (with authentication)",
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
                color: "blue-text-gradient",
            },
            {
                name: "Authentication",
                color: "green-text-gradient",
            },
        ],
        image: online,
        source_code_link: "https://github.com/Davy-G/Mvc-Database-Manager",
    },
    {
        name: "Store Manager Ui",
        description:
            "a project for a course i attended in 2022, allows user to access a store database with windows forms made ui.",
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
                color: "green-text-gradient",
            },
            {
                name: "windows Forms",
                color: "pink-text-gradient",
            },
            {
                name: "Authentication",
                color: "blue-text-gradient",
            },
        ],
        image: dbwf,
        source_code_link: "https://github.com/Davy-G/Windows-forms-database-manager-with-authenticaton",
    },
    {
        name: "Store Project",
        description:
            "a project built on clean architecture, uses mvc api on backend and uses blazor webassembly on frontend (coming soon)",
        tags: [
            {
                name: "Mvc api",
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
                name: "Entity Framework Core",
                color: "green-text-gradient",
            },
            {
                name: "Blazor",
                color: "pink-text-gradient",
            },
        ],
        image: csharp,
        source_code_link: "https://github.com/Davy-G/StoreProject",
    },



];

export { services, technologies, experiences, testimonials, projects };
