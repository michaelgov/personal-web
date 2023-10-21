import Navbar from "./navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import {Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
    <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
    </>
  )
}

export default App;
