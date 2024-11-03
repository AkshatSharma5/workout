
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const workoutRoutes = require("./routes/workouts");

require("dotenv").config();

app.use(cors())
// middleware for sending "data" through POST/PATCH request as a json
app.use(express.json())

app.use((req,res,next)=>{  // A middleware
  console.log("Mujhse har request ko guzarna padega:\n", req.path, req.method);
  next(); // very imp. to move on to next route / next middlware
})

//Register all routes to this URL
app.use("/api/workouts", workoutRoutes) // all routes to be accessed now as "localhost:3500/api/workouts(name_of route)" , replace  "(name_of route)" by name of route like "/", "/faq"

// NOW NO MORE REQUIRED AS WE R USING /routes/workouts.js FOR ROUTES NOW...
// app.get("/", (req, res) => {
//   res.end("<h1>Hello</h1>");
// });
// app.get("/contact", (req, res) => {
//   res.json({ email: "abc@xyz.com", phone: 9149022220 });
// });
// app.get("/faq", (req, res) => {
//   res.end("<h1>faq</h1>");
// });

mongoose.connect(process.env.MONGO_URI).then(
  ()=>console.log("Successfully connected")
).catch((error)=>console.log("Some error occurred: ",error))
//Note that if you use "@,#,etc" - special characters in your PASSWORD , make sure to escape them using '/'

app.listen(process.env.PORT, () => {
  console.log(
    `Server listening to your GET,POST,etc requests on port ${process.env.PORT}...`
  );
});
