import React , {useState} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../Components/layout/Main";
import SignInPage from "../Components/layout/SignInPage";
import SignUpPage from "../Components/layout/SignUpPage";
import Cart from "../Components/views/home/Cart";
import NavBar from "../Components/layout/NavBar";
import Footer from "../Components/layout/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyLibrary from "../Components/Product/MyLibrary";
import AboutUs from "../Components/AboutUs/about";
import Product from "../Components/Product/Product";

function PublicRouter() {
    let location = useLocation();
    const [cart, setCart] = useState([]);
    const handleClick = (item) => {
		let isPresent = false;
	
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
            {(location.pathname === '/') ? (
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
            ) : (
                <React.Fragment>
                    <div className="w-100">
                        <NavBar />
                        <div className="content-bg">
                
                        <Routes>
                            <Route path='/login' element={<SignInPage />} />
                            <Route path='/signup' element={<SignUpPage />} />
                            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
                            <Route path='/mylibrary' element={<MyLibrary/>} />
                            <Route path='/aboutus' element={<AboutUs/>} />
                            <Route path='/products' element={<Product/>} />

                            </Routes>
                        </div>
                        <Footer />
                    </div>

                </React.Fragment>
            )}
        </>
    );
}

export default PublicRouter;