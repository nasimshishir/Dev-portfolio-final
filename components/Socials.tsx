import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook } from 'react-icons/fa'

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
        path: "https://www.linkedin.com/in/nasimshishir/"
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/Shishir171/"
    },
    {
        icon: <FaInstagram />,
        path: "https://instagram.com/nasim_shishir"
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