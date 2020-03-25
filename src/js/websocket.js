let websocket = new WebSocket("wss://online-chess-server.herokuapp.com/");

websocket.sendObject = (object) => {
    websocket.send(JSON.stringify(object));
};

websocket.addEventListener("open", (event) => {
    console.log("[open] Connection established");
});

websocket.addEventListener("message", (event) => {
    console.log(`[message] Data received from server: ${event.data}`);
});

websocket.addEventListener("close", (event) => {
    if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        console.log('[close] Connection died');
    }
});

websocket.addEventListener("error", function (error) {
    console.log(`[error] ${error.message}`);
    websocket = new WebSocket("ws://localhost:1337");
});


export default websocket;