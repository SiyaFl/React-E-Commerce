import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';  
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Banner_Dog from './Components/Assets/Banner_Dog.jpg';
import Banner from './Components/Assets/Banner.jpg';
import Shop_Banner from './Components/Assets/Banner_Shop.jpg';
import Banner_Cat from './Components/Assets/Banner_Cat.jpg';

function App()  {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/Cats' element={<ShopCategory banner={Banner_Cat} category="Cats" />} />
          <Route path='/Birds' element={<ShopCategory banner={Banner}  category="Birds" />} />
          <Route path='/Dogs' element={<ShopCategory banner={Banner_Dog}  category="Dogs" />} />
          <Route path='/Fish' element={<ShopCategory banner={Shop_Banner}  category="Fish" />} />
          <Route path='/SmallPets' element={<ShopCategory banner={Shop_Banner}  category="SmallPets" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
