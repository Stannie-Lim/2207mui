const express = require('express');
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost/reactthing');

const syncAndSeed = async () => {

};

const app = express();
const path = require('path');

app.use('/dist', express.static('dist'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;

const init = async ()=> {
  //sync database and seed data here
  try {
    await syncAndSeed();
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

init();
