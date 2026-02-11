import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Navbar"
import Home from "./Home"
import Writer from "./Writer"
import Tools from "./Tools"
import WorldLab from "./WorldLab"
import About from "./About"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Writer />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/world-lab" element={<WorldLab />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
