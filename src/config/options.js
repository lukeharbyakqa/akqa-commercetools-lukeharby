import dotenv from "dotenv";

dotenv.config();

const options = {
  projectKey: process.env.PROJECT_KEY,
  scopes: [process.env.SCOPES],
  clientID: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET,
  apiURL: process.env.API_URL,
  authURL: process.env.AUTH_URL,
  importURL: process.env.IMPORT_URL,
  accessToken: process.env.ACCESS_TOKEN
};

export { options };
