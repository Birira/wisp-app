import { useState, useEffect } from 'react';
import { getBooks } from '../Services/BookService';

export const useItems = () => {
    const [Items, setItems] = useState([])

    useEffect( () => {
        const fetchItems = async () =>{

        const books = await getBooks();
        
        setItems(books);
    };
    fetchItems();   
    }, [])
  return (
    Items
  )
}
