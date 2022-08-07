// ref : https://github.com/websockets/ws
import { WebSocketServer } from 'ws';

// create websocket server with minimal config to run on port 8081
export const wss = new WebSocketServer({port : 8081});


// for each new connection send welcome message
wss.on('connection', function connection(ws) {    
    // for each new message send a standard reply for testing

    console.log(ws);

    ws.on('message', function message(data) {
      console.log('received: %s', data);
      ws.send('Standard message reply from server.');
    });
  
    ws.send('Welcome to NodeJS websocket demo.');
    console.log(ws);
  });