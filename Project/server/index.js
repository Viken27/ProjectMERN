import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const connectionString ="mongodb+srv://raghukaria9:yZNddUEQ5QSSNDVg@cluster0.jbn3l.mongodb.net/parva";
const PORT = 9000;
// const URL = process.env.MONGOURL;

mongoose.connect(connectionString).then(()=>{
    
    console.log("DB connected succesfully");

    app.listen(PORT,()=>{
        console.log(`Server is running on port: ${PORT}`);
    })
}).catch(error => console.log(error))

app.use("/api",route)
// import express from "express";
// import mongoose from "mongoose";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import cors from "cors";

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// dotenv.config();

// const PORT = process.env.PORT || 1008;
//const URL = process.env.MONGOURL; // Make sure this is set correctly in your .env file
// const connectionString ="mongodb+srv://raghukaria9:yZNddUEQ5QSSNDVg@cluster0.jbn3l.mongodb.net/parva";
// mongoose
//   .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("DB connected successfully");
//     app.listen(PORT, () => {
//       console.log(`Server is running on port: ${PORT}`);
//     });
//   })
//   .catch((error) => console.error("Error connecting to MongoDB:", error));
