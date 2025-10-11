import {Newsreader, Public_Sans, Montserrat} from 'next/font/google'

export const newsreader = Newsreader({
    subsets:['latin'],
    weight:'600',
    style: 'italic',
})

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '700'
})

export const publicSans = Public_Sans({
    subsets: ['latin'],
    weight:'400',
})