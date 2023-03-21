
import './App.css';
import React, { createContext } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from "./components/navbar"
import { Shop } from './pages/shop/shop'
import { Cart } from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context';
export const ShopContext = createContext(null);


function App() {
  return <div className="App">
    <ShopContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </ShopContextProvider>
  </div>

}

export default App;
