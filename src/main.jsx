import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Main />
    <Footer />
  </StrictMode>,
)

/*
  2 component
  - navbar => h1 => hello from navbar
  - main => h1 => hello from main
  - footer => h1 => hello from footer
*/