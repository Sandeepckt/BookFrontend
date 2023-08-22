import React from 'react';

import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import SignInPage from './Components/SignInPage';

import SignUpPage from './Components/SignUpPage';
import Main from './Components/Main';
import Cart from './Components/Cart';


function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main />}> 
        
          <Route path='login' element={<SignInPage/>}/>
          <Route path='signup' element={<SignUpPage />}/>
          <Route path='cart' element={<Cart/>}/>

        </Route>
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>
  );
}

export default App;
