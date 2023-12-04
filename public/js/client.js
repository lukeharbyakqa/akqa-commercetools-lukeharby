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
const trigger = document.querySelector('.trigger');
const triggerOptionsRequest = document.querySelector('.triggerOptionsRequest');
const triggerOptionsResponse = document.querySelector('.triggerOptionsResponse');

const target = new Date();
let data;

// Project details
projectDetails.addEventListener('click', () => {
  socket.emit('getProjectDetails', target);
});

socket.on('sendProjectDetails', (data) => {
  detailsProjectDetails.textContent = JSON.stringify(data.body, null, 4);
});

// API Root
apiRoot.addEventListener('click', () => {
  socket.emit('getApiRoot', target);
});

socket.on('sendApiRoot', (data) => {
  console.log(`client: received sendApiRoot from server`);
  detailsApiRoot.textContent = JSON.stringify(data, null, 4);
});

// Actions group
actionsGroup.addEventListener('click', () => {
  socket.emit('getActionsGroup', target);
});

socket.on('sendActionsGroup', (data) => {
  detailsActionsGroup.textContent = JSON.stringify(data.body, null, 4);
});

// Request builder
createRequest.addEventListener('click', () => {
  socket.emit('getCreateRequest', target);
});

socket.on('sendCreateRequest', (data) => {
  detailsCreateRequest.textContent = JSON.stringify(data.body, null, 4);
});

// Products
products.addEventListener('click', () => {
  socket.emit('getProducts', target);
});

socket.on('sendProducts', (data) => {
  detailsProducts.textContent = JSON.stringify(data.body, null, 4);
});

// Product types
productTypes.addEventListener('click', () => {
  socket.emit('getProductTypes', target);
});

socket.on('sendProductTypes', (data) => {
  detailsProductTypes.textContent = JSON.stringify(data.body, null, 4);
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

  triggerOptionsRequest.textContent = JSON.stringify(postData, null, 4);

  fetch('/api/extension', options, (error, response) => {
      console.log(`error: ${error}`);
      console.log(`response.body ${response.body}`);
  })
    .then(response => response.json())
    .then(response =>
      triggerOptionsResponse.textContent = JSON.stringify(response, null, 4)
    );
};
