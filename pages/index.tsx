import '@/assets/slyles/globals.scss'
import { Cover } from 'components/blocks/Cover/Cover'
import { Header } from 'components/blocks/Header/Header'
import { Intro } from 'components/blocks/Intro/Intro'
import { Reasons } from 'components/blocks/Reasons/Reasons'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Cover />
                <Intro />
                <Reasons/>
                {'HowTo'}
            </main>
            {'Footer'}
        </>
    )
}
