import fs from 'fs';
import path from 'path';
import CategoryExporter from '@commercetools/category-exporter';
import { options } from '../config/options.js';

const url = `${options.authURL}/oauth/token?grant_type=client_credentials`;
const fileFinish = path.join(process.cwd(), 'src', 'import', 'logs', 'log.json');
let token;

const authHeader = new Headers();
authHeader.append("Authorization", "Basic " + btoa(options.clientID + ":" + options.secret));
const raw = "";

const requestOptions = {
  method: 'POST',
  headers: authHeader,
  body: raw,
  redirect: 'follow'
};

fetch(url, requestOptions)
  .then(response => response.text())
  .then(result => {
    const data = JSON.parse(result);
    token = data.access_token;
    retriveCategoryExporter();
  })
  .catch(error => console.log('error', error));

const logger = {
  error: console.error,
  warn: console.warn,
  info: console.log,
  debug: console.debug,
};

const outputStream = fs.createWriteStream(fileFinish);

const errorHandler = (error) => console.log('error', error);

// Register error listener
const retriveCategoryExporter = () => {
  const optionsImporter = {
    apiConfig: {
      apiUrl: options.apiURL,
      host: options.authURL,
      projectKey: options.projectKey,
      credentials: {
        clientId: options.clientID,
        clientSecret: options.secret
      }
    },
    accessToken: token,
    predicate: 'key=""'
  };
  const categoryExporter = new CategoryExporter.default(optionsImporter, logger);
  outputStream.on('error', errorHandler);
  outputStream.on('finish', () => console.log('done with export'));
  categoryExporter.run(outputStream);
}

