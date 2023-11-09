import express from "express";
const app = express();

import { Server } from "socket.io";
import { retrieveProjectDetails } from '../index.js';

const PORT = 8080;
const SOCKET_PORT = 3000;
const io = new Server(SOCKET_PORT);

app.use(express.static("public"));

io.on('connection', (socket) => {
  console.log('server: a user connected');

  socket.on('getProjectDetails', (data) => {
    retrieveProjectDetails(data)
      .then(responseData => {
        io.emit('sendProjectDetails', responseData);
    });
  });

  socket.on('disconnect', () => {
    console.log('server: user disconnected');
  });

});

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));


