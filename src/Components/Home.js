import React from 'react';
import NavBar  from './NavBar';
import  BookCard  from './BookCard';
import Cart from './Cart';


function Home() {
    return(
    <>
        <NavBar/>
        <BookCard/>
        <Cart/>
    </>
    );
}

export default Home;
