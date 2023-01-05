const express = require("express");
const linkRoute = require("./route/linkRoute")
const cors = require("cors")({origin: true});

const connect = require("./helper/db")
connect();

const port = 8000;
const app = express(); 

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,  
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json()); 

app.use("/links", 
async (request, response, next) => {
    cors(request, response, async ()=> {
        response.header("Access-Control-Allow-Origin", "*")
        if (
            !request.body?.URL ||
            !request.body?.shortURL 
            ) {
                response
                .status(400)
                .json({message: `URL required`})
            }
            const createLink = await LinkModel.create({...request.body})
            console.log(request.body);
            console.log(createLink);
            response   
            .status(201)
            .json({message: `created`,  data: createLink})
        })
    }) 

app.listen(port, () => {
    console.log(`server running at localhost:${port}`);
})

