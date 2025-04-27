import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './pages/Home'
import Products from './pages/products'
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Contact from './pages/contact'


const App = () => {
    return (
        <div className='navbar'>
            <Navbar />
            <div className='container'>
                {/* <Routes>
                    <Route path='/' element={<Home />} />
                </Routes> */}
            </div>
        </div>
    )
}
export default App;




