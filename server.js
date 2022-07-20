import 'dotenv/config' 
import express from 'express';
import './db.js';
import card from './dbModel.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 9000;


// middleware
app.use(express.json());
app.use(cors());


// APIs endpoints
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
    app.post("/add-profile", (req,res)=>{
        try{
            card.create(req.body,(err,data)=>{
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.status(201).send(data)
                }
            });
        }
        catch(error){
            res.status(500).send(error);
        }
    });
    
    
    app.get("/profiles",(req,res)=>{
        try{
            card.find((err,data)=>{
                if(err){
                    res.status(500).send(err);
                }
                else{
                    res.status(200).send(data)
                }
            });
        }
        catch(error){
            res.status(500).send(error);
        }
    });
   }


// app.post("/add-profile", (req,res)=>{
//     try{
//         card.create(req.body,(err,data)=>{
//             if(err){
//                 res.status(500).send(err);
//             }
//             else{
//                 res.status(201).send(data)
//             }
//         });
//     }
//     catch(error){
//         res.status(500).send(error);
//     }
// });


// app.get("/profiles",(req,res)=>{
//     try{
//         card.find((err,data)=>{
//             if(err){
//                 res.status(500).send(err);
//             }
//             else{
//                 res.status(200).send(data)
//             }
//         });
//     }
//     catch(error){
//         res.status(500).send(error);
//     }
// });


app.listen(port,()=>{
    console.log("App is running on port "+ port + "...");
})