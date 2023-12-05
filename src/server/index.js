import express from 'express';
const app = express();

import { Server } from 'socket.io';
import { retrieveProjectDetails } from '../index.js';
import { retriveApi } from '../apiRoot.js';
import { retrieveActionsGroup } from '../actionGroup.js';
import { retrieveCreateRequest } from '../createRequest.js';
import { retrieveProducts } from '../getProducts.js';
import { retrieveProductTypes } from '../getProductTypes.js';
import { retrieveExtensions } from '../getExtensions.js';

const PORT = 8080;
const SOCKET_PORT = 3000;
const io = new Server(SOCKET_PORT);

app.use(express.static('public'));

app.use(express.json());

app.post('/api/extension', (req, res) => {
  console.log('receiving data ...');
  console.log('body is ', req.body);
  const responseObject = {
    message: "Response from server: Thank you and have a great day",
    status: 200,
    currentDate: new Date(),
    body: req.body
  }
  res.send(responseObject);
  res.end();
});

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
      });
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
      });
  });

  // Products
  socket.on('getProducts', (data) => {
    retrieveProducts(data)
      .then(responseData => {
        io.emit('sendProducts', responseData);
        console.log(`server: sending products`);
      });
  });

  // Product types
  socket.on('getProductTypes', (data) => {
    retrieveProductTypes(data)
      .then(responseData => {
        io.emit('sendProductTypes', responseData);
        console.log(`server: sending productTyes`);
      });
  });

    // Extensions
    socket.on('getExtensions', (data) => {
      retrieveExtensions(data)
        .then(responseData => {
          io.emit('sendExtensions', responseData);
          console.log(`server: sending extensions`);
        });
    });

  socket.on('disconnect', () => {
    console.log('server: user disconnected');
  });

});

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
