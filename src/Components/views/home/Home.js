import React from 'react';
// import  BookCard  from './BookCard';
import BookCard from './BookCard';


function Home() {
    return (
        <>
            <div className="content-bg">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-4 col-sm-6'>

                            <BookCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
