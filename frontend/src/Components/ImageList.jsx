import { useEffect, useState } from 'react';
import BookService from "../Services/BookService";
import env from "react-dotenv";

const bookService = new BookService();

const books = await bookService.getBooks();
const booksR = books.reverse();

console.log(books);
const ImageList = () => {

  const [Libros, setLibros] = useState([]);

  useEffect(() => {
    setLibros(booksR)
  }, []);


  return (
    <section className="contianer m-5">
      <h1 className='text-center'>Galería de Fotografía</h1>
      <p className='text-center'>Explora nuestra colección de fotografías cuidadosamente seleccionadas.</p>

      <div className="row mb-5">
        {Libros.map((libro) => (
          <div key={libro._id} className="col-3 p-3">
            <a href={`/img/${libro._id}`}>
            <img src={`${import.meta.env.VITE_API_URL}/${libro.image}`} className="card-img-top rounded" width={300} height={400} />
            </a>

            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{libro.title}</h5>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><a className="btn btn-outline-light mt-auto" href="/">Add to cart</a></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section >
  )
}

export default ImageList;
