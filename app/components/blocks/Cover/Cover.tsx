import { FC } from 'react'
import styles from './Cover.module.scss'
import { Layout } from 'components/Layout/Layout'
import Image from 'next/image'
import coverImage from '@/assets/images/cover.svg'

export const Cover: FC = () => {
    // console.log(coverImage);

    return (
        <Layout>
            <section className={styles.cover}>
                <Image alt="" src={coverImage} className={styles.cover__bg} />
                <h1 className={styles.cover__title}>
                    <span>c</span>
                    <span>чистого</span>
                    <span>листа</span>
                </h1>
            </section>
        </Layout>
    )
}
