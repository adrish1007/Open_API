require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const insurance_routes = require('./routes/insuranceRoutes')
const mutualfunds_routes = require('./routes/mutualfundsRoutes')
const investment_routes = require('./routes/investmentRoutes')
const dbURI = process.env.MONGODB_URI;
const port = process.env.PORT;
const app = express();

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port);
    console.log(`Server Running on part ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());

app.use('/insurance', insurance_routes)
app.use('/mutual_funds', mutualfunds_routes)
app.use('/investment', investment_routes)

app.get('/',(req,res)=>{
  res.send('Please write the desired url to visit different routes. Have a Nice Day')
})