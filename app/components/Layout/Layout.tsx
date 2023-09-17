import { FC, ReactNode } from 'react'

interface ILayout {
    children: ReactNode
    className?: string
}

export const Layout: FC<ILayout> = ({ children, className }) => {
    return (
        <div className={className}>
            <div className="container">{children}</div>
        </div>
    )
}
