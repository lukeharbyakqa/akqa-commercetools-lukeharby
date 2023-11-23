import CategoryExporter from '@commercetools/category-exporter'
import fs from 'fs'
import { options } from '../config/options.js';

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
  accessToken: options.accessToken,
  predicate: 'key=""'
};

const logger = {
  error: console.error,
  warn: console.warn,
  info: console.log,
  debug: console.debug,
};

const outputStream = fs.createWriteStream('./logs/log.json');

const categoryExporter = new CategoryExporter.default(optionsImporter, logger);

const errorHandler = () => console.log('error');

// Register error listener
outputStream.on('error', errorHandler);

outputStream.on('finish', () => console.log('done with export'));

categoryExporter.run(outputStream);
