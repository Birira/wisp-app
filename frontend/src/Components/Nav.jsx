import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a href="/" className="navbar-brand">Inicio</a>
                </div>
            </nav>

            <div className='container m-0'>
                <h1 className='text-center'>Galería de Fotografía</h1>
                <p className='text-center'>Explora nuestra colección de fotografías cuidadosamente seleccionadas.</p>
            </div>
        </>
    )
}

export default Nav;
