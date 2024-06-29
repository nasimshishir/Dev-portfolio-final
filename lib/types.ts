import { IconType } from "react-icons/lib"

export type Project = {
    num: string,
    category: string,
    title: string,
    description: string,
    stack: { name: string, icon?: IconType }[],
    image: string[],
    liveSite?: string,
    github?: string
}

export type FormDataType = {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    service?: string,
    message: string
}