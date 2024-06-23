import { SiTailwindcss, SiNextdotjs, SiNestjs, SiBootstrap } from 'react-icons/si';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPhp, FaWordpress, FaElementor } from 'react-icons/fa';
import { DiMongodb, DiMysql, DiGithub } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'


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
    },
    {
        name: "Contact",
        path: "/contact"
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
        num: 300,
        text: 'Code Commits'
    }

]


export const services = [
    {
        title: "Web Development",
        description: "I build websites and web applications using the latest technologies. I use React, Next.js, and Gatsby to build static websites and apps. I also use Node.js, Express.js, and MongoDB to build APIs and backend services.",
        num: '01',
        href: "/services/web-development"
    },
    {
        title: "Mobile App Development",
        description: "I build cross-platform mobile apps using React Native and Expo. I also use the Flutter framework to build mobile apps.",
        num: '02',
        href: "/services/mobile-app-development"
    },
    {
        title: "Design",
        description: "I design websites and mobile apps using Figma and Adobe XD. I also use Adobe Photoshop and Illustrator to create graphics.",
        num: '03',
        href: "/services/design"
    },
    {
        title: "Data Science",
        description: "I use Python, JavaScript, and SQL to build data analysis and machine learning models. I also use the NumPy, Pandas, and SciKit-Learn libraries to build models.",
        num: '04',
        href: "/services/data-science"
    }
]

export const about = {
    title: "About me",
    description: "I'm a full stack developer with a passion for building websites and apps. I'm currently working at a small web development agency.",
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
    description: "I have worked with many companies and organizations. I have worked in various roles such as web developer, mobile app developer, and data scientist.",
    experiences: [
        {
            company: "925clo",
            position: "Full-stack Developer",
            duartion: "January 2023- April 2024"
        },
        {
            company: "School of RObotics",
            position: "Web developemnt Instructor",
            duartion: "June 2023- Dec 2023"
        },
        {
            company: "Zealtech Bd",
            position: "Web developemnt (Intern)",
            duartion: "Dec 2022- May 2023"
        }
    ]
}

export const education = {
    icon: "",
    title: "My Education",
    description: "I have completed my Bachelor's degree in Computer Science and Engineering from the University of Dhaka.",
    info: [
        {
            institution: "Programming Hero",
            degree: "Complete Web Development",
            duration: "2022"
        },
        {
            institution: "Codeman Bd",
            degree: "WordPress & Woocommerce",
            duration: "2021"
        },
        {
            institution: "National University",
            degree: "Bachelor's in Accounting (Honors)",
            duration: "2014-2018"
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
    description: "I have worked with many technologies. I have worked with these technologies.",
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
            icon: FaReact,
            name: "React"
        },
        {
            icon: FaNodeJs,
            name: "node.js"
        },
        {
            icon: FaPhp,
            name: "php"
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

export const projects = [
    {
        num: "01",
        category: "frontend",
        title: "project 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at cumque culpa ipsum nesciunt nemo saepe qui?",
        stack: [{ name: "WordPress", icon: FaWordpress }, { name: "Elementor", icon: FaElementor }, { name: "Crocoblock" }],
        image: "/assets/work/thumb1.png",
        liveSite: ""
    },
    {
        num: "02",
        category: "frontend",
        title: "project 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at cumque culpa ipsum nesciunt nemo saepe qui?",
        stack: [{ name: "WordPress", icon: FaWordpress }, { name: "Elementor", icon: FaElementor }],
        image: "/assets/work/thumb2.png",
        liveSite: ""

    },
    {
        num: "03",
        category: "fullstack",
        title: "project 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam at cumque culpa ipsum nesciunt nemo saepe qui?",
        stack: [{ name: "React", icon: FaReact }, { name: "Next.Js", icon: SiNextdotjs }, { name: "Tailwindcss", icon: SiTailwindcss }],
        image: "/assets/work/thumb3.png",
        liveSite: "",
        github: ""
    }

]

export const contactInfo = [
    {
        icon: FaPhoneAlt,
        title: "Phone",
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