import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/main"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:categories' element={<Main />} />
          <Route path='/meals/detail/:id' element={<Main />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
