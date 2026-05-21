import './globals.css'
import { ThemeProvider } from './providers'

export const metadata = {
  title: 'Экосервис',
  description: 'Аренда и обслуживание биотуалетов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">

      <body>

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>

    </html>
  )
}