const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const storeRoutes = require('./routes/store');

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', storeRoutes);

// routes
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// mongodb conection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('Server lintening on port', port));