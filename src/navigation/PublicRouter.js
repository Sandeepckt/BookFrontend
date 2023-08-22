import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../Components/layout/Main";
import SignInPage from "../Components/layout/SignInPage";
import SignUpPage from "../Components/layout/SignUpPage";
import Cart from "../Components/views/home/Cart";
import NavBar from "../Components/layout/NavBar";
import Footer from "../Components/layout/Footer";

function PublicRouter() {
    let location = useLocation();

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
                            <Route path='/cart' element={<Cart />} />
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