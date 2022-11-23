import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {ListA} from "./pages/ListA"
import {ListB} from "./pages/ListB"
import {Navbar} from "./components/Navbar"
import './App.css'

const  App = () => {


  return (
    <>
    <Navbar />
    <Container className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listA" element={<ListA />} />
        <Route path="/listB" element={<ListB />} />
      </Routes>
      
    </Container>
    
    </>
  )
}

export default App
