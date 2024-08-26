import React from 'react'


const Book = (props) => {
    const { img, title, author } = props;
    const clickHandler = () => {
        alert("touba touba");
    }
    return <section className="book" >
        <img src={img} alt="bookphoto" />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>Buy</button>
    </section>
}

export default Book