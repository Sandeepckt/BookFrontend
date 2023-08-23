import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from '../views/home/Home';
import CardList from '../Cart/CardList';


function Main() {

  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Home /> */}
      <CardList/>
      <Footer />
      
    </>
  );
}

export default Main;