import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">Inicio</a>
                </div>

                <div className='container m-0'>
                    <h1 className='text-center'>Galería de Fotografía</h1>
                    <p className='text-center'>Explora nuestra colección de fotografías cuidadosamente seleccionadas.</p>
                </div>
            </nav>
        </>
    )
}

export default Nav;
