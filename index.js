const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const itemRouter = require('./routes/items');
const reviewRouter = require('./routes/review');
const cartRouter = require('./routes/cart');

const defaultCorsHeaders = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

app.use(cors(defaultCorsHeaders));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);
app.use('/items', itemRouter);
app.use('/carts', cartRouter);
app.use('/user', userRouter);
app.use('/review', reviewRouter);

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
      cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8'),
    },
    app.use('/', (req, res) => {
      res.write('Congrats! You made https server now :)');
      res.end();
    }),
  )
  .listen(port);
