const WebS = require("ws")
const wss = new WebS.Server({ port: 8082 })

wss.on("connection",ws=>{
    console.log("connection!");

    ws.on("close", () => {
        console.log("client disconnect");
    })
});
