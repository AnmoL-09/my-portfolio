import {Newsreader, Public_Sans} from 'next/font/google'

export const newsreader = Newsreader({
    subsets:['serif'],
    weight:'600',
    style: 'italic',
})

export const publicSans = Public_Sans({
    subsets: ['latin'],
    weight:'400',
})