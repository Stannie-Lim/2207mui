import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Routes, Route} from 'react-router-dom';

import {Products} from './Products';
import {Navbar} from './Navbar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async() => {
      const {data: products} = await axios.get('/products');

      setProducts(products);
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <div style={{backgroundColor: 'lightgrey'}}>
      <Navbar />
      <Routes>
        <Route path='/products' element={<Products products={products} loading={loading} />} />
      </Routes>
    </div>
  );
};

export default App;
