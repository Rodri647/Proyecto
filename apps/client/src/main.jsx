import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y Routes
import App from './App';
import AppAdmin from './AppAdmin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Router>
      <React.StrictMode>
        <Routes>
          {/* Ruta principal para la página pública */}
          <Route path="/*" element={<App />} />

          {/* Ruta para la administración */}
          <Route path="/admin/*" element={<AppAdmin />} />
        </Routes>
      </React.StrictMode>
    </Router>
  </ChakraProvider>,
);
