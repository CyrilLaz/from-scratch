import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'

const primaryColor = '#131313'
const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            padding:'1.25rem'
        },

        extend: {
            fontFamily: {
                intel: ['Intel', 'sans-serif'],
                garamond: ['Garamond', 'sans-serif'],
            },
            fontSize: { '2lg': '1.38rem' },
            spacing: { 1.25: '1.25rem', 1.5: '1.5rem', 2.5: '2.5rem' },
            borderRadius: { layout: '30px' },
            container: {
                center: true,
            },
            colors: {
                primaryColor,
                white: colors.white,
                transparent: colors.transparent,
                yellow: '#FEE42A',
                gray: { 500: '#343434', 200: '#F5F5F5' },
            },
        },
    },
    plugins: [
        plugin(({ addComponents, theme }) => {
            addComponents({
                '.centred-block': { display: 'flex', margin: '0 auto' },
                '.text-link': {
                    color: theme('colors.gray.200'),
                    fontFamily: theme('font-family.intel'),
                    fontWeight: 'normal',
                    fontSize: '1rem',
                    textDecorationLine: 'underline',
                    lineHeight: '1.2rem',
                    transition: 'opacity .3s ease-in-out ',
                    opacity: '1',
                    '&:hover': {
                        opacity: '.2',
                    },
                    '&_active': {
                        textDecorationLine: 'none',
                    },
                },
            })
        }),
    ],
}
export default config
