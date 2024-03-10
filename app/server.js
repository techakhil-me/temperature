// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
    debug: true,
    cors: {
       origin: "http://localhost:3000", // Allow requests from your client application
       methods: ["GET", "POST"],
       credentials: true
    }
   });

const cors = require('cors');
app.use(cors())

io.on('connection', (socket) => {
 socket.on('stream', ({ roomId, track }) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit('stream', { stream: track, peerId: socket.id });
 });
});

server.listen(3001, () => console.log('Server running on port 3001'));
