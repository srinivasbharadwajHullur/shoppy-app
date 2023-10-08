import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MensCategories from './components/MensCategories';
import WomensCategories from './components/WomensCategories';
import JewelleryCategories from './components/JewelleryCategories';
import ElectronicCategories from './components/ElectronicCategories';
import WhisList from './components/WhisList';
import CartPage from './components/CartPage';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Body />}/>
          <Route path='/menscategories' element={<MensCategories />}/>
          <Route path='/womenscategories' element={<WomensCategories />}/>
          <Route path='/jewellerycategories' element={<JewelleryCategories />}/>
          <Route path='/electronicscategories' element={<ElectronicCategories />}/>
          <Route path='/whislist' element={<WhisList />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path='/successpage' element={<SuccessPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
