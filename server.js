const express = require('express');
const {faker} = require('@faker-js/faker');

const app = express();
const path = require('path');
app.use(express.json());

app.use('/dist', express.static('dist'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/products', async (req, res, next) => {
  setTimeout(() => {
    res.send(Array(100).fill().map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      photoURL: faker.image.city(),
      createdAt: new Date(),
    })));
  }, 2000);
});


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));
