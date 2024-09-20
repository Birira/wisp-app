import Cart from './Components/Cart';
import ImageList from './Components/ImageList';
import Nav from './Components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './Components/Product';
import { CartContextProvider } from './Context/CartContext';
import Foo from './Components/Foo';

function App() {

  return (
    <div className='bg-dark text-warning'>
      <BrowserRouter>
        <CartContextProvider>
          <Nav />
          <Routes>
            <Route path='/' element={<ImageList />}></Route>
            <Route path='/img/:id' element={<Product />}></Route>
            <Route path='/Cart' element={<Cart />}></Route>
          </Routes>
          <Foo/>
        </CartContextProvider>
      </BrowserRouter>

    </div>
  )
}

export default App;
