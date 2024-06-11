const webSocket = require("ws");

const wss = new WebSocket.Server({  port :3000});

wss.on("connection",()=>{

    console.log("new client connected");    

});

