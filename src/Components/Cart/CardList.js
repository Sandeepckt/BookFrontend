import React, { useState } from 'react';
import CartNavbar from './CartNavbar';
import Amazon from './Amazon';
import CartNew from './CartNew';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardList = () => {
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
			<div className='container-fluid content-bg'>
				<div className='row'>
					<div className='col-lg-12 mb-4'>
						<h1 className='title text-center'>Our Products</h1>
					</div>
					<div className='col-lg-12 mb-4'>

						{/* <CartNavbar size={cart.length} setShow={setShow} /> */}
						{
							show ? <Amazon handleClick={handleClick} /> : <CartNew cart={cart} setCart={setCart} handleChange={handleChange} />
						}
						{
							warning && <div className='warning'>Item is already added to your cart</div>
						}
						<ToastContainer />
					</div>
				</div>
			</div>
		</>
	)
}

export default CardList