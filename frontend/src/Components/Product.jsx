import React from 'react'
import { useParams } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Product = () => {

    const { id } = useParams();
    const { addToCart, cart, removeFromCart, Items } = useCart();

    const dir = Items.find(item => item._id === id);

    const checkProductInCart = product => {
        return cart.some(item => item._id === product._id)
    }


    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={`${import.meta.env.VITE_API_URL}/${dir.image}`} alt="..." /></div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bolder">Shop item template</h1>
                        <div className="fs-5 mb-5">
                            <span>$40.00</span>
                        </div>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div className="d-flex">
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                                <button onClick={() => checkProductInCart(dir)
                                    ? removeFromCart(dir)
                                    : addToCart(dir)} className="btn btn-outline-light mt-auto" type="button">{`${checkProductInCart(dir) ? 'Eliminar del carrito' : 'Agregar al carrito'}`}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;
