import "dotenv/config";
import { ctpClient } from "./BuildClient";
import { ApiRoot, createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

const projectKey = process.env.PROJECT_KEY;
// const scopes = [process.env.SCOPES];
// const clientID = process.env.CLIENT_ID;
// const secret = process.env.SECRET;
// const apiURL = process.env.API_URL;
// const authURL = process.env.AUTH_URL;

// Create apiRoot from the imported ClientBuilder and include your Project key
const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({ projectKey: projectKey });

// Example call to return Project information
// This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
const getProject = () => {
  return apiRoot.get().execute();
};

// Retrieve Project information and output the result to the log
getProject().then(console.log).catch(console.error);

const getEndPoint = () => {
  console.log(apiRoot.me);
  return apiRoot.me;
};

getEndPoint();
