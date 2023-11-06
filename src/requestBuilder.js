import {
  createRequestBuilder,
  features,
} from '@commercetools/api-request-builder';
import { options } from './options.js';

const config = {
  projectKey: options.projectKey,
  customServices: {
    users: {
      type: 'users',
      endpoint: '/users',
      features: [features.query, features.queryOne],
    },
  },
};

export const requestBuilder = createRequestBuilder(config);
