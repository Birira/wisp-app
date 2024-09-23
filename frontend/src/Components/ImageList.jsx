import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import About from "./About";
import Contact from "./Contact";
import { useCart } from "../hooks/useCart.js";

const ImageList = () => {
  const { addToCart, cart, removeFromCart } = useCart();
  const Libros = useContext(ShopContext);

  const checkProductInCart = product => {
    return cart.some(item => item._id === product._id)
  }
  return (
    <section className="contianer m-5">
      <h1 className='text-center'>Galería de Fotografía</h1>
      <p className='text-center'>Explora nuestra colección de fotografías cuidadosamente seleccionadas.</p>

      <div className="row mb-5">
        {Libros.map((libro) => (
          <div key={libro._id} className="col-3 p-3">
            <Link to={`/img/${libro._id}`}>
              <img src={`${import.meta.env.VITE_API_URL}${libro.image}`} className="card-img-top rounded" width={300} height={400} />
            </Link>
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{libro.title}</h5>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button onClick={() => checkProductInCart(libro)
                    ? removeFromCart(libro)
                    : addToCart(libro)} className="btn btn-outline-light mt-auto" type="button">{`${checkProductInCart(libro) ? 'Eliminar del carrito' : 'Agregar al carrito'}`}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <About></About>
      <Contact></Contact>
    </section >
  )
}

export default ImageList;
