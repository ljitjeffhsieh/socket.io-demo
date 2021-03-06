const express = require('express');
const app = express();

//將 express 放進 http 中開啟 Server 的 3000 port ，正確開啟後會在 console 中印出訊息
const server = require('http').Server(app).listen(3000,()=>{console.log('open server!')});

//將啟動的 Server 送給 socket.io 處理
const io = require('socket.io')(server);

//監聽 Server 連線後的所有事件，並捕捉事件 socket 執行
io.on('connection', socket => {
    //經過連線後在 console 中印出訊息
    console.log('success connect!');
    /*只回傳給發送訊息的 client*/
    socket.on('SEND_LOCAL_MESSAGE', message => {
        socket.emit('SEND_LOCAL_MESSAGE', message)
    })

    /*回傳給所有連結著的 client*/
    socket.on('SEND_GLOBAL_MESSAGE', message => {
        io.sockets.emit('SEND_GLOBAL_MESSAGE', message)
    })

    /*回傳給除了發送者外所有連結著的 client*/
    socket.on('SEND_BROADCAST_MESSAGE', message => {
        socket.broadcast.emit('SEND_BROADCAST_MESSAGE', message)
    })
})