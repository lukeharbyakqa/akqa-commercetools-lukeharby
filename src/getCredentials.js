import { getCredentials } from '@commercetools/get-credentials';
import { options } from './config/options.js';

getCredentials(options.projectKey).then(console.log).catch(console.error);
