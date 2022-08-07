import { receiveMessage } from './client-app.js';


const wss_url = "ws://localhost:8081";
export const ws = new WebSocket(wss_url);



ws.addEventListener("open",()=>{
    console.log("We are connected !!!");
});


ws.addEventListener("message",e => {
    receiveMessage(e.data);    
});
