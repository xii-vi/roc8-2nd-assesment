import { ProductListing } from './pages/product-listing';
import './App.css';
import { Cart } from './pages/cart';
import { Navbar } from './components/navbar';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </div>
  );
}

export default App;
