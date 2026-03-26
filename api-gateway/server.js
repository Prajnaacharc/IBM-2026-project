const express = require('express');
const cors = require('cors');
const routes = require('./routes/gatewayRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(5000, () => console.log('API Gateway running on 5000'));

