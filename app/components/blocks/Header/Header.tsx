import { FC } from 'react'
import styles from './Header.module.scss'
import { Layout } from 'components/Layout/Layout'
import Image from 'next/image'
import logo from '@/assets/images/logo.svg'
import Link from 'next/link'
import classNames from 'classnames'

export const Header: FC = () => {
    return (
        <Layout>
            <header className={styles.header}>
                <Image
                    alt="logo"
                    src={logo}
                    draggable={false}
                    unoptimized
                    className={styles.header__logo}
                />
                <nav className={styles.header__nav}>
                    <ul>
                        <li>
                            <Link className={classNames(styles.header__link,{[styles.header__link_active]:true})} href={'#'}>Главная</Link>
                        </li>
                        <li>
                            <Link className={classNames(styles.header__link, {[styles.header__link_active]:false})}  href={'#'}>O нас</Link>
                        </li>
                        <li>
                            <Link className={classNames(styles.header__link, {[styles.header__link_active]:false})}  href={'#'}>Контакты</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Layout>
    )
}
