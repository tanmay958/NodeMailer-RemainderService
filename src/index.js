const express =  require("express");
const bodyParser =  require("body-parser");

const {PORT} =  require("./config/server-config");

const {sendBasicEmail} =  require("./services/email-service");
const setupServer =  ()=>{
    const app =  express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log("server started");

        sendBasicEmail(
            'tanmay958.nitt@gmail.com',
            'tanmaymandal958@gmail.com',
            'testing',
            'hye how are you',
        )
        

    })
}

setupServer();