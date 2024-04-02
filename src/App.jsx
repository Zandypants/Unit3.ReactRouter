import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"
import Blue from "./Blue"
import Red from "./Red"

function App() {

  return (
    <div id="container">
      <Navbar/>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blue" element={<Blue/>}></Route>
          <Route path="/red" element={<Red/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
