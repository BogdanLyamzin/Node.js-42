const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});

const clients = [];

wsServer.on("connection", (newClient)=> {
    // console.log("New connection");
    clients.push(newClient);
    setTimeout(() => {
        newClient.send("Welcome to wsServer!")
    }, 3000);

    newClient.on("message", (data) => {
        const message = data.toString();
        console.log(message);
    })

    clients.forEach(client => {
        if(client !== newClient) {
            client.send("New user connect")
        }
    })
})


