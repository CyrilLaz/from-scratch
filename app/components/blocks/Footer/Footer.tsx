import { Layout } from 'components/Layout/Layout'
import { FC } from 'react'

import styles from './Footer.module.scss'
import Link from 'next/link'

export const Footer: FC = () => {
    return (
        <Layout className="border-t border-t-yellow">
            <footer className={styles.footer}>
                <p>&copy; VЁRSTKA</p>
                <ul className={styles.footer__links}>
                    <li>
                        <Link className={styles.footer__link} href={'#'}>
                            VK
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.footer__link} href={'#'}>
                            YouTube
                        </Link>
                    </li>
                </ul>
            </footer>
        </Layout>
    )
}
