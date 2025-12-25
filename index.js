const routes = require("./routes/apis");
const express = require("express");
const dbConnect  = require('./config/db.config');
dbConnect.sync()
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({
  origin:[
    "http://localhost:5173",
   'https://keen-media-house.onrender.com/',
  'https://www.keenmediahouse.co.ke'
  ],
   

}));
app.use('/api',routes);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})
app.use(cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
    "http://localhost:5173",
   'https://keen-media-house.onrender.com/',
  'https://www.keenmediahouse.co.ke',
  'https://keenmediahouse.co.ke' 
    ];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  }));

  