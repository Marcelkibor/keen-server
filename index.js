const routes = require("./routes/apis");
const express = require("express");
const app = express();
const cors = require('cors');


const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use('/api',routes);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})