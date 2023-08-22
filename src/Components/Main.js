import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';


function Main() {
  
  return (
    <>
        <NavBar/>
        <Outlet />
        <Footer/>
        
    </>
  );
}

export default Main;