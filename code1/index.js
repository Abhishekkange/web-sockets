const WebSocket = require("ws");

var clients = [];
const serverWS = new WebSocket.Server({ port: 3000 });

//WSS stands for web socket server
serverWS.on("connection", clientWS => {

    //check for maximum connections
    if (clients.length >= 2) {
        clientWS.close();
    } else {

        console.log("new client connected");
        clients.push(clientWS);
        // console.log(clientWS);
    }

  clientWS.on("message", message =>{

    

    clients.forEach(client =>{

        if(client!=clientWS)
            {
                client.send(message.toString());
                console.log(message.toString());
            }
    })


  });


});

