import { Layout } from 'components/Layout/Layout'
import { Heading } from 'components/ui/Heading/Heading'
import { FC } from 'react'

import styles from './HowTo.module.scss'
import { howToArticles } from './howTo.data'
import { Card } from './card/Card'

export const HowTo: FC = () => {
    return (
        <Layout>
            <section className={styles.howTo}>
                <Heading
                    className={styles.howTo__heading}
                    text={['Как всё-таки начать', 'что-то делать']}
                />
                <p>
                    Чаще всего страх чистого листа появляется не из-за чего-то
                    одного, а из-за совокупности нескольких факторов. Вот что
                    может помочь:
                </p>
                <ul className={styles.howTo__articles}>
                    {howToArticles.map((article, idx) => (
                        <Card
                            key={article.title}
                            type={(idx+1) % 2 === 0 ? 'yellow' : 'dark'}
                            {...article}
                        />
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
