import { FC } from 'react'
import { IHeading } from './heading.interface'

import styles from './Heading.module.scss'
import classNames from 'classnames'

export const Heading: FC<IHeading> = ({ text, className }) => {
    return (
        <h3 className={classNames(className, styles.heading)}>
            {text.map((t) => (
                <span key={t}>{t}</span>
            ))}
        </h3>
    )
}
