import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Shop from './pages/shop/Shop'
import {Cart} from './pages/cart/cart'
import {ShopContextProvider} from './context/shop_context'
import Checkout from "./pages/checkout"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
         <Routes>

          <Route path="/" element={<Shop/>}/>
          <Route path="/cart"  element={<Cart/>}/>
          <Route path="/checkout"  element={<Checkout/>}/>
         </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
