import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/main"
import Product from "./pages/product"
import DetailProduct from "./pages/detail-product"
import ListProduct from "./pages/list-product"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main children={<Product />}/>} />
          <Route path='/:categories' element={<Main children={<ListProduct />}/>} />
          <Route path='/meals/detail/:id' element={<Main children={<DetailProduct />}/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
