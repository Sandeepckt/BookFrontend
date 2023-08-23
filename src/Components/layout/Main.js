import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from '../views/home/Home';
import App1 from '../Cart/App1';


function Main() {

  return (
    <>
      <NavBar />
      <Outlet />
      <Home />
      <App1/>
      <Footer />
      
    </>
  );
}

export default Main;