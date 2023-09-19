import { Layout } from 'components/Layout/Layout'
import { FC } from 'react'
import styles from './Reasons.module.scss'
import { ReasonList } from './ReasonList'
import { Heading } from 'components/ui/Heading/Heading'

export const Reasons: FC = () => {
    return (
        <Layout className="bg-yellow">
            <section className={styles.reasons}>
                <Heading className={styles.reasons__heading} text={['Почему чистый лист','— такой cтрашный?']}/>
                <p>
                    Сам по себе чистый лист, конечно, не страшный. Боимся мы
                    чаще всего объёма работы, которую предстоит сделать. Усилия,
                    той точки, которую нужно преодолеть, чтобы переключить мозг
                    из состояния паники в состояние потока. Причин, почему
                    первые усилия даются так сложно, может быть очень много. Вот
                    основные:
                </p>
                <ReasonList/>
            </section>
        </Layout>
    )
}
