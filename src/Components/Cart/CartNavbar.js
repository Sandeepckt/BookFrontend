import React from 'react';

const CartNavbar = ({ size, setShow }) => {
    return (
        <nav className='bg-success mb-3'>
            <div className="container-fluid">
                <div className='row align-items-center '>
                    <div className='col'>
                        <span className="my_shop" onClick={() => setShow(true)}>
                            My Shopping
                        </span>
                    </div>
                    <div className='col-auto text-end'>
                        <div className="cart pt-2" onClick={() => setShow(false)}>
                            <span>
                                <i className="fas fa-cart-plus font-18"></i>
                                
                            <span>{size}</span>
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default CartNavbar;