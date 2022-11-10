import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Routes, Route} from 'react-router-dom';

import {Products} from './Products';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      const {data: products} = await axios.get('/products');
      setProducts(products);
    };

    getProducts();
  }, []);

  console.log(products);

  return (
    <Routes>
      <Route path='/products' element={<Products />} />
    </Routes>
  );
};

export default App;
