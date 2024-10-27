import './styles.module.scss'
import { Navbar } from '@/app/components/navbar/navbar'

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}
