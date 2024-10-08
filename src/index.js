import React from 'react';
import ReactDOM from 'react-dom/client';

//css
import './index.css';
import { books } from './books';
import Book from './Book';

//booklist which will be show in home screen 
function BookList() {
  return <section className="booklist">
   {books.map((book)=>{
      return <Book key={book.id} {...book}></Book>
   })}
  </section>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

