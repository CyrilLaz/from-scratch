import '@/assets/slyles/globals.scss'
import { Cover } from 'components/blocks/Cover/Cover'
import { Footer } from 'components/blocks/Footer/Footer'
import { Header } from 'components/blocks/Header/Header'
import { HowTo } from 'components/blocks/HowTo/HowTo'
import { Intro } from 'components/blocks/Intro/Intro'
import { Reasons } from 'components/blocks/Reasons/Reasons'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Cover />
                <Intro />
                <Reasons />
                <HowTo />
            </main>
            <Footer />
        </>
    )
}
