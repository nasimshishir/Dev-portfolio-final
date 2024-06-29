import { SiTailwindcss, SiNextdotjs, SiNestjs, SiBootstrap, SiJquery, SiRedux } from 'react-icons/si';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPhp, FaWordpress, FaElementor, FaWhatsapp } from 'react-icons/fa';
import { DiMongodb, DiMysql } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Project } from '@/lib/types';


export const Links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Works",
        path: "/works"
    },
    {
        name: "Resume",
        path: "/resume"
    }
]

export const stats = [
    {
        num: 4,
        text: 'Years of Experience'
    },
    {
        num: 26,
        text: 'Projects Completed'
    },
    {
        num: 8,
        text: 'Tecgnologies Learned'
    },
    {
        num: 288,
        text: 'Code Commits'
    }

]


export const services = [
    {
        title: "Web Development",
        description: "I provide expert web development services, specializing in WordPress customization, e-commerce solutions, and full-stack development with Next.js, Nest.js.",
        num: '01',
        href: "/services/web-development"
    },
    {
        title: "Mobile App Development",
        description: "I offer professional mobile app development services, creating intuitive and high-performance apps for both iOS and Android.",
        num: '02',
        href: "/services/mobile-app-development"
    },
    {
        title: "UI/UX Design",
        description: "I provide UI/UX design services, focusing on creating visually stunning and user-friendly interfaces. Delivering designs that enhance user engagement and ensure a seamless user experience across all devices.",
        num: '03',
        href: "/services/design"
    },
    {
        title: "Maintenance",
        description: "I offer reliable web and mobile app maintenance services, ensuring your applications run smoothly and stay up-to-date. I provide regular updates, bug fixes, and performance optimizations to keep your digital solutions performing at their best.",
        num: '04',
        href: "/services/data-science"
    }
]

export const about = {
    title: "About me",
    description: "I'm a full stack developer with a passion for building websites and apps. I'm currently seeking a mid-level WordPress expert position that offers good growth prospects where I can leverage my technical expertise and creativity to build custom web solutions and contribute to the success of forward-thinking companies..",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Md Nasim us Sabah Shishir"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Bangladeshi"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+880) 1679 361 019"
        },
        {
            fieldName: "WhatsApp",
            fieldValue: "(+880) 1844 675 244"
        },
        {
            fieldName: "Experience",
            fieldValue: "4+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "contact.nasimshishir@gmail.com"
        },
        {
            fieldName: "Status",
            fieldValue: "Open for Job"
        },
        {
            fieldName: "Languages",
            fieldValue: "Bangla, English, Hindi, Spanish"
        }
    ]
}

export const experiences = {
    icon: "",
    title: "My Experience",
    description: "Over 4 Years of Diverse Experience in WordPress Customization, E-commerce Solutions, and Full-Stack Development.",
    experiences: [
        {
            company: "925clo",
            position: "Full-stack Developer",
            duartion: "May 2023- April 2024"
        },
        {
            company: "School of RObotics",
            position: "Web developemnt Instructor",
            duartion: "June 2023- Dec 2023"
        },
        {
            company: "Zealtech Bd",
            position: "Frontned developer (Intern)",
            duartion: "Dec 2022- April 2023"
        }
    ]
}

export const education = {
    icon: "",
    title: "My Education",
    description: "Expertise built through professional courses in web development, continually enhanced by hands-on experience.",
    info: [
        {
            institution: "Programming Hero",
            degree: "Complete Web Development",
            duration: "2022"
        },
        {
            institution: "Codeman Bd",
            degree: "WordPress & Woocommerce",
            duration: "2020"
        },
        {
            institution: "Victoria Government College",
            degree: "Higher Secondary Certificate",
            duration: "2014-2016"
        },
        {
            institution: "Comilla Zilla School",
            degree: "Secondary School Certificate",
            duration: "2010-2011"
        }
    ]
}


export const skills = {
    icon: "",
    title: "My Skills",
    description: "I have worked with these technologies.",
    info: [
        {
            icon: FaHtml5,
            name: "html 5"
        },
        {
            icon: FaCss3,
            name: "css 3"
        },
        {
            icon: FaWordpress,
            name: "wordpress"
        },
        {
            icon: FaElementor,
            name: "elementor"
        },
        {
            icon: SiTailwindcss,
            name: "tailwindcss"
        },
        {
            icon: SiBootstrap,
            name: "bootstrap"
        },
        {
            icon: FaJs,
            name: "javascript"
        },
        {
            icon: SiJquery,
            name: "jQuery"
        },
        {
            icon: FaPhp,
            name: "php"
        },
        {
            icon: FaReact,
            name: "React"
        },
        {
            icon: SiRedux,
            name: "redux"
        },
        {
            icon: FaNodeJs,
            name: "node.js"
        },
        {
            icon: DiMongodb,
            name: "mongodb"
        },
        {
            icon: DiMysql,
            name: "mysql"
        },
        {
            icon: BsGithub,
            name: "github"
        },
        {
            icon: SiNextdotjs,
            name: "next.js"
        },
        {
            icon: SiNestjs,
            name: "nest.js"
        },
        {
            icon: FaFigma,
            name: "figma"
        }
    ]
}

export const projects: Project[] = [
    {
        num: "01",
        category: "Educational Website",
        title: "Imran Academy Ltd",
        description: "A custom WordPress site featuring a responsive design, seamless user experience, and tailored functionalities to meet client-specific needs, enhancing their online presence and engagement with SEO.",
        stack: [{ name: "WordPress", icon: FaWordpress }, { name: "Elementor", icon: FaElementor }, { name: "Crocoblock" }],
        image: ["/assets/work/p-1/1.png", "/assets/work/p-1/2.png", "/assets/work/p-1/3.png", "/assets/work/p-1/4.png", "/assets/work/p-1/5.png", "/assets/work/p-1/6.png"],
        liveSite: "https://imranacademyltd.com/",
    },
    {
        num: "02",
        category: "Real Estate Website",
        title: "Mundo Property",
        description: "A dynamic real estate website using WordPress, WPBakery, and Elementor. The site features property listings, advanced search filters, and responsive design, providing an intuitive and engaging user experience.",
        stack: [{ name: "WordPress", icon: FaWordpress }, { name: "Elementor", icon: FaElementor }, { name: "Crocoblock" }],
        image: ["/assets/work/p-2/1.png", "/assets/work/p-2/2.png", "/assets/work/p-2/3.png", "/assets/work/p-2/4.png", "/assets/work/p-2/5.png", "/assets/work/p-2/6.png"],
        liveSite: "https://mundop.com"

    },
    {
        num: "03",
        category: "Ai Style Manager",
        title: "925",
        description: "Developed the front end for this AI Style Manager using modern web technologies like React, Next.js. The project included interactive UI elements, seamless user experience, and responsive design to enhance user interaction with AI-driven style recommendations.",
        stack: [{ name: "React", icon: FaReact }, { name: "Next.Js", icon: SiNextdotjs }, { name: "Tailwindcss", icon: SiTailwindcss }],
        image: ["/assets/work/p-3/1.png", "/assets/work/p-3/2.png", "/assets/work/p-3/3.png", "/assets/work/p-3/4.png", "/assets/work/p-3/5.png"],
        liveSite: "https://925clo.com",
        github: "https://github.com/nasimshishir/925clo.client"
    },
    {
        num: "04",
        category: "Business Portfolio",
        title: "Beyond Think Creative (MECA)",
        description: "This is a multilingual website created with WordPress using Elementor, Crocoblock, and Polylang. Client showcase their services and update their events through the site in both English & Chinese.",
        stack: [{ name: "WordPress", icon: FaWordpress }, { name: "Elementor", icon: FaElementor }, { name: "Crocoblock" }],
        image: ["/assets/work/p-4/1.png", "/assets/work/p-4/2.png", "/assets/work/p-4/3.png", "/assets/work/p-4/4.png", "/assets/work/p-4/5.png", "/assets/work/p-4/6.png"],
        liveSite: "https://btcmeca.com"
    }

]

export const contactInfo = [
    {
        icon: FaPhoneAlt,
        title: "Phone",
        description: "+880 1679 361 019"
    },
    {
        icon: FaWhatsapp,
        title: "WhatsApp",
        description: "+880 1844 675 244"
    },
    {
        icon: FaEnvelope,
        title: "Email",
        description: "contact.nasimshishir@gmail.com"
    },
    {
        icon: FaMapMarkerAlt,
        title: "Address",
        description: "Darogabari, Cumilla-3500"
    },
]