import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Productos from "./components/Productos/Productos"
import ItemDetail from "./components/ItemDetail/ItemDetail"
import Categoria from "./components/Category/Category"
import Cart from "./components/Cart/Cart"
const App = () => {
  return (
    <div >
     
     <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>} /> 
                    <Route path="/category/:categoryId" element={<Categoria/>}/>
                    <Route path="/productos" element={<Productos/>}/>
                    <Route path="/products/:productId" element={<ItemDetail/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
      
    </div>
    // Cada componente debe tener su carpeta 
  )
}

export default App