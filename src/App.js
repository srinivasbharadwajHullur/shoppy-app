import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MensCategories from './components/MensCategories';
import WomensCategories from './components/WomensCategories';
import JewelleryCategories from './components/JewelleryCategories';
import ElectronicCategories from './components/ElectronicCategories';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
