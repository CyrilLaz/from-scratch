import '@/assets/styles/globals.scss'
import { Cover } from 'components/blocks/Cover/Cover'
import { Footer } from 'components/blocks/Footer/Footer'
import { Header } from 'components/blocks/Header/Header'
import { HowTo } from 'components/blocks/HowTo/HowTo'
import { Intro } from 'components/blocks/Intro/Intro'
import { Reasons } from 'components/blocks/Reasons/Reasons'
import { HeadTags } from 'utils/meta/Meta'

export default function Home() {
    return (
        <>
            <HeadTags title="Начать с чистого листа" description="Страница отображение желания начать с чистого листа или с начала" />
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
