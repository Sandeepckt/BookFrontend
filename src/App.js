import React from 'react';

import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import SignInPage from './Components/layout/SignInPage';

import SignUpPage from './Components/layout/SignUpPage';
import Main from './Components/layout/Main';
import Cart from './Components/views/home/Cart';
import PublicRouter from './navigation/PublicRouter';

function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
      <Route path='/' element={<Main />}> 
        
          <Route path='login' element={<SignInPage/>}/>
          <Route path='signup' element={<SignUpPage />}/>
          <Route path='cart' element={<Cart/>}/>

        </Route>
      </Routes> */}
      <PublicRouter/>
    </BrowserRouter>  
  </React.StrictMode>
  );
}

export default App;
