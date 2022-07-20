import mongoose from "mongoose";
const dbConnectionUrl = process.env.DATABASE_URL;
mongoose.connect(dbConnectionUrl,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then((response)=>console.log("Database Connected Successfully!")).catch((error)=>console.log(error));
