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
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
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
