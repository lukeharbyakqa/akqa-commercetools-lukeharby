const options = {
  projectKey: process.env.PROJECT_KEY,
  scopes: [process.env.SCOPES],
  clientID: process.env.CLIENT_ID,
  secret: process.env.SECRET,
  apiURL: process.env.API_URL,
  authURL: process.env.AUTH_URL,
};

export { options };
