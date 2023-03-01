import React, {useEffect, useState} from "react";
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const SpringStomp = ()=>{
    const url = "http://localhost:8080/gs-guide-websocket"; 

    let stompClient = Stomp.over(function(){
        return new WebSocket(url)
      });

    // var socket = new SockJS(url);
    // stompClient = Stomp.over(socket);

    const connection = stompClient.connect({}, function (frame) {
        // setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            console.log(JSON.parse(greeting.body).content);
        });
    });

    // stompClient.send("/topic/greetings", {}, JSON.stringify({'name': "foo"}))
    // if(connection){
    //     console.log('trying to send with ', connection)
    //     stompClient.send("/topic/greetings", {}, JSON.stringify({'name': "foo"}))
    // }else{
    //     console.log('failed...')
    // }
    
    
    return (
        <>Spring Stomp</>
    )
}

export default SpringStomp;