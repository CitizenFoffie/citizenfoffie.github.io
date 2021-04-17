const WebS = require("ws")
const wss = new WebS.Server({https://citizenfoffie.github.io/})

wss.on("connection",ws=>{
    console.log("connection!")
    ws.on("message",msg=>{
        wss.broadcast(JSON.stringify({func:msg}))
    })
});

wss.broadcast = function broadcast(msg){
    wss.clients.forEach(function each(client){
        client.send(msg)
    });
};
