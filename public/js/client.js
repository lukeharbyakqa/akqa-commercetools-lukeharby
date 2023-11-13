const socket = io("ws://localhost:3000");

const projectDetails = document.querySelector('.projectDetails');
const detailsProjectDetails = document.querySelector('.detailsProjectDetails');
const apiRoot = document.querySelector('.apiRoot');
const detailsApiRoot = document.querySelector('.detailsApiRoot');
const actionsGroup = document.querySelector('.actionsGroup');
const detailsActionsGroup = document.querySelector('.detailsActionsGroup');
const createRequest = document.querySelector('.createRequest');
const detailsCreateRequest = document.querySelector('.detailsCreateRequest');

const target = new Date();

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
