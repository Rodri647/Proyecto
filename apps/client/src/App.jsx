import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Products from './views/products';
import ProductDetails from './views/product_details';
import Services from './views/services';
import Contact from './views/contact';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
      <div>
        <NavBar/>
          <div className="App">
            <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/products" element={< Products /> } />
              <Route path="/products/:id" element={< ProductDetails />} />
              <Route path="/services" element={< Services /> } />
              <Route path="/contact" element={< Contact /> } />
            </Routes>
          </div>
        <Footer />
      </div>
  )
}

export default App