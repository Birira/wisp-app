import React, { createContext } from 'react'
import BookService from "../Services/BookService";
export const ShopContext = createContext();


const bookService = new BookService();

const books = await bookService.getBooks();

export const ShopContextProvider = ({ children }) => {

  return (
    <ShopContext.Provider value={books}>
      {children}
    </ShopContext.Provider>
  )
}
