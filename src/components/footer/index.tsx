import { ReactNode } from "react"

interface FooterProps{
    url: string,
    children: ReactNode
}

export function Footer({url, children} : FooterProps){
    return(
        <a href={url} rel="noopener noreferrer">
        {children}
        </a>
    )
}