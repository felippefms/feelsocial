import './globals.css'
import { Noto_Sans } from 'next/font/google';

import Providers from '../../redux/provider/provider';

const notosans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400','500','600'],
});

export const metadata = {
  title: 'Feelsocial',
  description: 'Feelsocial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-br" className={notosans.className}>
        <body className='w-screen h-screen'>
        <Providers>
          {children}
        </Providers>
        </body>
      </html>
  )
}