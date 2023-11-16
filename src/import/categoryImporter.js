import CategoryExporter from '@commercetools/category-exporter'
import fs from 'fs'
import { options } from '../config/options.js';

const optionsImporter = {
  apiConfig: {
    apiUrl: options.apiURL,
    host: options.authURL,
    project_key: options.projectKey,
    credentials: {
      clientId: options.clientID,
      clientSecret: options.clientSecret
    }
  },
  accessToken: '123456xxxx0987654321',
  predicate: 'key="my-desired-key"'
};

const logger = {
  error: console.error,
  warn: console.warn,
  info: console.log,
  debug: console.debug,
};

const categoryExporter = new CategoryExporter(optionsImporter, logger);

// Register error listener
outputStream.on('error', errorHandler);

outputStream.on('finish', () => console.log('done with export'));

categoryExporter.run(outputStream);
