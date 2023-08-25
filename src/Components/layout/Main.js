import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
// import Home from '../views/home/Home';
// import CardList from '../Cart/CardList';
import Amazon from '../Cart/Amazon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from '../views/home/Cart';


function Main() {
  const [show, setShow] = useState(true);
	const [cart, setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item) => {
		let isPresent = false;
		cart.forEach((product) => {
			if (item.id === product.id)
				isPresent = true;
		})
		if (isPresent) {
			setWarning(true);
			setTimeout(() => {
				setWarning(false);
			}, 2000);
			toast("Already added in the cart");
			return;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) => {
		let ind = -1;
		cart.forEach((data, index) => {
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;

		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
  return (
    <>
      <NavBar size={cart.length} setShow={setShow}/>
	{
							show ? <Amazon handleClick={handleClick} /> :
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
						}
						{
							warning && <div className='warning'>Item is already added to your cart</div>
						}
						<ToastContainer />
      <Outlet />
      {/* <Home /> */}
      {/* <CardList/> */}
      <Footer />
      
    </>
  );
}

export default Main;