import Navbar from "./navbar"
import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
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
