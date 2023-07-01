import './globals.css';
import { Navbar, Footer } from './components';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className='flex flex-col h-screen bg-backgroundColor text-lg mt-0'>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </body>
  )
}
