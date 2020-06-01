const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const routes = require('./routes/routes.js');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
routes(app);
app.listen(port,()=> console.log(`app listener on port ${port}!`));