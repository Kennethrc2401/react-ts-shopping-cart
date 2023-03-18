import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  </ShoppingCartProvider>
  )
}

export default App

// How To Run This Project
// 1. Open the project in VS Code
// 2. Open the Command Terminal
// 3. Run the command: npm install
// 4. Run the command: npm run dev
// 5. Open a browser and go to: http://localhost:PORTNUMBER