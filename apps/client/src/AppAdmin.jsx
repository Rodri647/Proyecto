import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarA from './components/navbarA';
import Footer from './components/footer';
import ProductForm from './components/productForm';
import ProductTable from './components/productTable';
import EditProductForm from './components/productEditForm';
import Dashboard from './views/dashBoard';

function AppAdmin() {
  return (
      <div>
        <NavBarA/>
          <div className="AppAdmin">
            <Routes>
              <Route path="/addproduct" element={< ProductForm /> } />
              <Route path="/products" element={<ProductTable />} />
              <Route path="/editproduct/:id" element={<EditProductForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        <Footer />
      </div>
  )
}

export default AppAdmin