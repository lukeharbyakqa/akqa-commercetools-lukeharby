import express from "express";
const app = express();

import { Server } from "socket.io";
import { retrieveProjectDetails } from '../index.js';
import { retriveApi } from '../apiRoot.js';
import { retrieveActionsGroup } from "../actionGroup.js";
import { retrieveCreateRequest } from "../createRequest.js";

const PORT = 8080;
const SOCKET_PORT = 3000;
const io = new Server(SOCKET_PORT);

app.use(express.static("public"));

io.on('connection', (socket) => {
  console.log('server: a user connected');

  // Project Details
  socket.on('getProjectDetails', (data) => {
    retrieveProjectDetails(data)
      .then(responseData => {
        io.emit('sendProjectDetails', responseData);
    });
  });

  // API Root
  socket.on('getApiRoot', (data) => {
    console.log(`server: received getApiRoot`);
    retriveApi(data)
      .then(responseData => {
        io.emit('sendApiRoot', responseData);
        console.log(`server: sending sendApiRoot`);
      })
  });

  // Actions group
  socket.on('getActionsGroup', (data) => {
    retrieveActionsGroup(data)
      .then(responseData => {
        io.emit('sendActionsGroup', responseData);
        console.log(`server: sending sendActionsGroup`);
      });
  });

  // Request builder
  socket.on('getCreateRequest', (data) => {
    retrieveCreateRequest(data)
      .then(responseData => {
        io.emit('sendCreateRequest', responseData);
        console.log(`server: sending sendCreateRequest`);
      })
  });

  socket.on('disconnect', () => {
    console.log('server: user disconnected');
  });

});

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
