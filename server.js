const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static('dist'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

const numbers = [1, 2, 3];

app.get('/api/numbers', (req, res)=> {
  res.send(numbers);
});

const port = process.env.PORT || 3000;

const init = ()=> {
app.listen(port, ()=> console.log(`listening on port ${port}`));
}

init();
