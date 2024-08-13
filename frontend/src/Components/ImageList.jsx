import { useEffect, useState } from 'react'
import BookService from "../Services/BookService";
const bookService = new BookService();

const books = await bookService.getBooks();


const ImageList = () => {

  const [Libros, setLibros] = useState([]);

  useEffect(() => {
    setLibros(books)
  }, []);

  return (
    <div className='container d-flex align-items-center'>
      <div className='row m-0'>
        {Libros.map((libro) => (
          <div key={libro._id} className="col-3">
            <figure className='figure text-center p-4'>
              <img src={`https://test-railway-pr-production.up.railway.app/${libro.image}`} width={300}
                height={300} className="rounded p-1" />
              <figcaption className='figure-caption'>{libro.title}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageList;
