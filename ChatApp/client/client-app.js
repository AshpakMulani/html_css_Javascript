const chatToggle = document.querySelector(".chat-btn");
const chatWindow = document.querySelector(".chat-win");
const sendButton = document.querySelector(".send-btn");
const messageFrame = document.querySelector(".msg-frame");
const sendText = document.querySelector(".send-txt");

import { ws } from './client-chat_ws.js';

// message window display toggle by applying/removing show class on chat window.
chatToggle.addEventListener("click", ()=> {
    chatWindow.classList.toggle("show");
})

export const receiveMessage = (txtValue) =>{   

    if (txtValue.trim().length>0) {   
            //insert new element with text from text box at the bottom of div
            let temp = `<div class="chat-msg-unit-left">
            <img src="./resources/systemuser.jpg" class="avatar" alt=""/>
            <div class="chat-msg">${txtValue}</div> </div>`;
    
            messageFrame.insertAdjacentHTML("beforeend",temp);
            
            //auto scrolling area to bottom when new content is added
            messageFrame.scrollTop =  messageFrame.scrollHeight;
        }
}

const addMessage = (txtValue) =>{  
    
    ws.send(txtValue);

    if (txtValue.trim().length>0) {   

        //insert new element with text from text box at the bottom of div
        let temp = `<div class="chat-msg-unit-right">
        <img src="./resources/clientuser.jpg" class="avatar" alt=""/>
        <span class="chat-msg">${txtValue}</span> </div>`;

        messageFrame.insertAdjacentHTML("beforeend",temp);
        
        //auto scrolling area to bottom when new content is added
        messageFrame.scrollTop =  messageFrame.scrollHeight;
        
        // after adding message to chat area clear the text box and reset the focus
        // for user to quickly start typing for new message
        sendText.value="";
        sendText.focus();
    }
}

//handle click action on send button
sendButton.addEventListener("click", ()=> {
    addMessage(sendText.value);
});


// handle enter pressed in chat text to send text message
sendText.addEventListener("keypress", (e)=> {
    (e.key === "Enter") ? addMessage(sendText.value) : null
});






