import './globals.css';
import { Navbar, Footer } from './components';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <script defer src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
      </head>

      <body className='h-screen bg-backgroundColor text-lg flex flex-col min-h-screen'>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
