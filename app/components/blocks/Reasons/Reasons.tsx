import { Layout } from 'components/Layout/Layout'
import { FC } from 'react'
import styles from './Reasons.module.scss'
import { ReasonList } from './ReasonList'

export const Reasons: FC = () => {
    return (
        <Layout className="bg-yellow">
            <section className={styles.reasons}>
                <h3 className={styles.reasons__header}>
                    <span>Почему чистый лист</span>
                    <span> — такой cтрашный?</span>
                </h3>
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
