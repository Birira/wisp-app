import { useEffect, useState } from 'react'
import BookService from "../Services/BookService";
const bookService = new BookService();

const books = await bookService.getBooks();


const BookList = () => {

  const [Libros, setLibros] = useState([]);

  useEffect(() => {
    setLibros(books)
  }, []);

  return (
    <div className='container m-1 bg-secondary'>
      <div className='row bg-primary m-0'>
        {Libros.map((libro) => (
          <div key={libro._id} className="col-3 bg-danger">
            <figure className='figure'>
            <img src={`https://test-railway-pr-production.up.railway.app/${libro.image}`} className="figure-img rounded mx-auto d-block" />
            <figcaption className='figure-caption'>{libro.title}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList;
