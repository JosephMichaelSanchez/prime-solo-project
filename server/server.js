const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const podRouter = require('./routes/pod.router');
const joinRouter = require('./routes/join.router');
const mainPodRouter = require('./routes/mainpod.router');
const podInfoRouter = require('./routes/podInfo.router');
const newDateRouter = require('./routes/newDate.router');
const getDatesRouter = require('./routes/getDates.router');
const deleteDateRouter = require('./routes/deleteDate.router');
const addHostRouter = require('./routes/addHost.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/pod', podRouter);
app.use('/api/join', joinRouter);
app.use('/api/mainpod', mainPodRouter);
app.use('/api/podinfo', podInfoRouter);
app.use('/api/newdate', newDateRouter);
app.use('/api/dates', getDatesRouter);
app.use('/api/delete', deleteDateRouter);
app.use('/api/host', addHostRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
