const express = require('express');
const path = require('path');
const morgan = require('morgan');

//routes
const authRouter = require('./routes/authRoutes');

const app = express();

// 1) GLOBAL MIDDLEWARES
// Serving static files
app.use(express.static(path.join(__dirname, 'static')));

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// 2) ROUTES
// app.use('/api/v1/users', userRouter);
app.use('/auth', authRouter);


app.all('*', (req, res, next) => {
  console.log(req.user);
  res.send('cant find on this server')
});

// export app ;
module.exports = app;
// old-code [branch]