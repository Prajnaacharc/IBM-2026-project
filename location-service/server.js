const express = require('express');
const cors = require('cors');
const routes = require('./routes/locationRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(5002, () => console.log('Location Service running on 5002'));