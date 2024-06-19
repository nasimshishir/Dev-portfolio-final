import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

interface Social {
    icon: React.ReactNode
    path: string
}
interface SocialsProps {
    containerStyles?: string
    iconStyles?: string
}

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/nasimshishir"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/nasim-shishir-1b041b1b3/"
    },
    {
        icon: <FaYoutube />,
        path: "https://www.youtube.com/channel/UC5n9b4q503_9e40h594f69g"
    },
    {
        icon: <FaTwitter />,
        path: "https://twitter.com/nasimshishir"
    }
]

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((social: Social, index) => {
                    return (
                        <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
                    )
                })
            }
        </div>
    )
}

export default Socials