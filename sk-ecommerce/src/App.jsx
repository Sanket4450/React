import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { FullProduct } from './components/products'
import { Categories } from './pages/Categories'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/ui/NavBar'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='products'>
                    <Route index element={<Products />} />
                    <Route path=':id' element={<FullProduct />} />
                </Route>
                <Route path='/categories' element={<Categories />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
