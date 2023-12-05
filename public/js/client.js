const socket = io("ws://localhost:3000");

const projectDetails = document.querySelector('.projectDetails');
const detailsProjectDetails = document.querySelector('.detailsProjectDetails');
const apiRoot = document.querySelector('.apiRoot');
const detailsApiRoot = document.querySelector('.detailsApiRoot');
const actionsGroup = document.querySelector('.actionsGroup');
const detailsActionsGroup = document.querySelector('.detailsActionsGroup');
const createRequest = document.querySelector('.createRequest');
const detailsCreateRequest = document.querySelector('.detailsCreateRequest');
const products = document.querySelector('.products');
const detailsProducts = document.querySelector('.detailsProducts');
const productTypes = document.querySelector('.productTypes');
const detailsProductTypes = document.querySelector('.detailsProductTypes');
const extensions = document.querySelector('.extensions');
const detailsExtensions = document.querySelector('.detailsExtensions');
const trigger = document.querySelector('.trigger');
const triggerOptionsRequest = document.querySelector('.triggerOptionsRequest');
const triggerOptionsResponse = document.querySelector('.triggerOptionsResponse');

const target = new Date();
let data;

const appendData = (target, data) => {
  target.textContent = JSON.stringify(data, null, 4);
}

// Project details
projectDetails.addEventListener('click', () => {
  socket.emit('getProjectDetails', target);
});

socket.on('sendProjectDetails', (data) => {
  appendData(detailsProjectDetails, data.body);
});

// API Root
apiRoot.addEventListener('click', () => {
  socket.emit('getApiRoot', target);
});

socket.on('sendApiRoot', (data) => {
  console.log(`client: received sendApiRoot from server`);
  appendData(detailsApiRoot, data);
});

// Actions group
actionsGroup.addEventListener('click', () => {
  socket.emit('getActionsGroup', target);
});

socket.on('sendActionsGroup', (data) => {
  appendData(detailsActionsGroup, data.body);
});

// Request builder
createRequest.addEventListener('click', () => {
  socket.emit('getCreateRequest', target);
});

socket.on('sendCreateRequest', (data) => {
  appendData(detailsCreateRequest, data.body);
});

// Products
products.addEventListener('click', () => {
  socket.emit('getProducts', target);
});

socket.on('sendProducts', (data) => {
  appendData(detailsProducts, data.body);
});

// Product types
productTypes.addEventListener('click', () => {
  socket.emit('getProductTypes', target);
});

socket.on('sendProductTypes', (data) => {
  appendData(detailsProductTypes, data.body);
});

// Extensions
extensions.addEventListener('click', () => {
  socket.emit('getExtensions', target);
});

socket.on('sendExtensions', (data) => {
  appendData(detailsExtensions, data.body);
});

// Send post data to endpoint
trigger.addEventListener('click', () => {
  data = {
    date: target,
    trigger: trigger
  }
  updateClient(data);
});

const updateClient = (postData) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  }

  appendData(triggerOptionsRequest, postData);

  fetch('/api/extension', options, (error, response) => {
      console.log(`error: ${error}`);
      console.log(`response.body ${response.body}`);
  })
    .then(response => response.json())
    .then(response =>
      appendData(triggerOptionsResponse, response)
    );
};
