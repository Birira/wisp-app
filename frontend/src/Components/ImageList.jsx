import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import { useCart } from "../hooks/useCart.js";

const ImageList = () => {
  const { addToCart, cart, removeFromCart, Items } = useCart();

  const checkProductInCart = product => {
    return cart.some(item => item._id === product._id)
  }
  return (
    <section className="contianer m-5">
      <h1 className='text-center'>Galería de Fotografía</h1>
      <p className='text-center'>Explora nuestra colección de fotografías cuidadosamente seleccionadas.</p>

      <div className="row mb-5">
        {Items.map((item) => (
          <div key={item._id} className="col-3 p-3">
            <Link to={`/img/${item._id}`}>
              <img src={`${import.meta.env.VITE_API_URL}${item.image}`} className="card-img-top rounded" width={300} height={400} />
            </Link>
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{item.title}</h5>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button onClick={() => checkProductInCart(item)
                    ? removeFromCart(item)
                    : addToCart(item)} className="btn btn-outline-light mt-auto" type="button">{`${checkProductInCart(item) ? 'Eliminar del carrito' : 'Agregar al carrito'}`}</button>
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
