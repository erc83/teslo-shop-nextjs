import { Metadata } from 'next' 
import ThemeMaterial from './components/theme/ThemeMaterial'


// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Teslo shop nextjs', 
    template: '%s | Teslo shop nextjs'
  },  
  description: 'Tienda para ver el uso de Tesla shop',
} 

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children, }: Props) {
  return (
    <html lang="es">
        <ThemeMaterial>
          <body> { children } </body>
        </ThemeMaterial>
    </html>
  )
}
