import { FC } from 'react'
import { ICardProps } from './card.interface'
import Image from 'next/image'
import styles from './Card.module.scss'
import classNames from 'classnames'

export const Card: FC<ICardProps> = ({ text, title, author, type }) => {
    return (
        <li
            className={classNames(styles.card, {
                [styles.card_type_dark]: type === 'dark',
                [styles.card_type_yellow]: type === 'yellow',
            })}
        >
            <article>
                {author && (
                    <figure className={styles.card__author}>
                        <Image
                            alt={`Фото ${author.name}`}
                            src={author.photo}
                            draggable={false}
                            unoptimized
                            width={100}
                            height={100}
                        />
                        <figcaption>{author.name}</figcaption>
                    </figure>
                )}
                <div className={styles.card__content}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </article>
        </li>
    )
}
