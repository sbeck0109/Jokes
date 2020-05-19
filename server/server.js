const port = 8000;
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config");

const app = express();
// app.use(cors());
//for post request
app.use(express.json());

// const routesFn = require("./routes/jokes.routes");
// routesFn(app);

require("./routes/jokes.routes")(app);

app.listen(port, ()=> {
  console.log(`listening for request on port ${port} to respond to.`)});
