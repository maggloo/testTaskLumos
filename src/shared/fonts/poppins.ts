import { Poppins } from 'next/font/google'
export const poppins = Poppins({
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['400', '500', '700', '600'],
})
