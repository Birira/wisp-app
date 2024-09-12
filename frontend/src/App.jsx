
import About from './Components/About';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import ImageList from './Components/ImageList';
import Nav from './Components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">Inicio</a>
                </div> */}

function App() {

  return (
    <div className='bg-dark text-warning'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<ImageList />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;
