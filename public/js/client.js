const socket = io("ws://localhost:3000");

const getProjectDetails = document.querySelector('.projectDetails');
const details = document.querySelector('.detailsProjectDetails');

getProjectDetails.addEventListener('click', () => {
  const target = new Date();
  socket.emit('getProjectDetails', target);
});

socket.on('sendProjectDetails', (data) => {
  details.textContent = JSON.stringify(data.body, null, 4);
});
