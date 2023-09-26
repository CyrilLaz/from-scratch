import Head from 'next/head'
import { FC } from 'react'
import { ReactNode } from 'react'
import { Favicons } from './Favicons'

export interface IMeta {
    title: string
    description?: string
}

export const HeadTags: FC<IMeta> = ({ description, title }) => {
    return (
        <Head>
            <meta
                itemProp="description"
                name="description"
                content={description}
            />
            <title>{title}</title>
            <Favicons />;
        </Head>
    )
}
// export default Meta
