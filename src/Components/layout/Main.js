import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from '../views/home/Home';


function Main() {

  return (
    <>
      <NavBar />
      <Outlet />
      <Home />
      <Footer />

    </>
  );
}

export default Main;