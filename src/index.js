import apiRoot from "./apiRoot.js";

// Example call to return Project information
// This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
const getProject = () => {
  return apiRoot.get().execute();
};

// Retrieve Project information and output the result to the log
const retrieveProjectDetails = (data) => {
  return getProject()
    .then(response => {
      data = response;
      return data;
    })
    .catch(console.error);
}

const getEndPoint = () => {
  console.log(`apiRoot.me: ${apiRoot.me}`);
  return apiRoot.me;
};

export {
  retrieveProjectDetails,
  getEndPoint
};
