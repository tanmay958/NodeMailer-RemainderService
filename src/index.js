const express =  require("express");
const bodyParser =  require("body-parser");
var cron = require('node-cron');
const {PORT} =  require("./config/server-config");
const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');

const {sendBasicEmail} =  require("./services/email-service");
const setupServer =  ()=>{
    const app =  express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.post('/api/v1/tickets', TicketController.create);
    app.listen(PORT,()=>{
        console.log("server started");
        jobs();
        // sendBasicEmail(
        //     'tanmay958.nitt@gmail.com',
        //     'tanmaymandal958@gmail.com',
        //     'testing',
        //     'hye how are you',
        // )
       

// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });
        

    })
}

setupServer();