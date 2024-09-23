import React from 'react';
import { useCart } from '../hooks/useCart'
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useCart()
  let cartNum = cart.length
  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0">Carrito</h1>
                        <h6 className="mb-0 text-muted">{`${cartNum}`} items</h6>
                      </div>
                      <button type="button" onClick={clearCart} className="btn btn-danger btn-block btn-lg">Limpiar carrito</button>
                      <hr className="my-4" />

                      {cart.map((item => (
                        <div className="row mb-4 d-flex justify-content-between align-items-center" key={item._id}>
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={`${import.meta.env.VITE_API_URL}${item.image}`}
                              className="img-fluid rounded-3" alt={item.tag} />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{item.title}</h6>
                            <h6 className="mb-0">{item.tag}</h6>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">$2000</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button type="button" onClick={() => removeFromCart(item)} className="btn btn-danger btn-block btn-lg">X</button>
                          </div>
                          <hr className="my-4" />
                        </div>
                      )))}

                      <div className="pt-5">
                        <h6 className="mb-0"><Link to='/' className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Volver a la tienda</Link></h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-body-tertiary">
                    <div className="p-5">

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>${`${2000 * cartNum}`}</h5>
                      </div>

                      <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark">Pagar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart;
