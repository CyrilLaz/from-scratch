import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'
// import coverImage from '@/assets/images/cover.svg'

// console.log(coverImage);

const primaryColor = '#131313'
const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            padding: '1.25rem',
        },

        extend: {
            fontFamily: {
                intel: ['Intel', 'sans-serif'],
                garamond: ['Garamond', 'sans-serif'],
            },
            lineHeight: { normal: '1.35rem' },
            fontSize: { base: ['1rem', '1.2rem'] },
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
                gray: { 500: '#343434', 400: '#CCC', 200: '#F5F5F5' },
            },
        },
    },
    plugins: [
        plugin(({ addComponents, addUtilities, theme }) => {
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
            }),
                addUtilities({
                    '.image-like-bg': {
                        objectPosition: 'center',
                        objectFit: 'cover',
                        pointerEvents: 'none',
                    },
                })
        }),
    ],
}
export default config
