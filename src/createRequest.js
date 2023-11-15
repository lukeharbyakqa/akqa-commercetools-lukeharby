import { createRequestBuilder } from '@commercetools/api-request-builder';
import { client } from './helpers/createClient.js';
import { options } from './config/options.js';
import { isNodeEnv } from './config/environment.js';

const projectKey = options.projectKey;
let uniqueIdCounter = 0;
let channelResponse;

function uniqueId(prefix) {
  const id = `${Date.now()}_${uniqueIdCounter}`;
  uniqueIdCounter += 1;
  return prefix ? prefix + id : id;
};

const key = uniqueId('channel_');
const body = {
  key,
  name: { en: key },
};

const service = createRequestBuilder({ projectKey }).channels;

const createRequest = {
  uri: service.build(),
  method: 'POST',
  body,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const getCreateRequest = () => {
  return client.execute(createRequest)
    .then(response => {
       return response;
    })
    .catch(error => console.log(error));
};

const retrieveCreateRequest = (data) => {
  return getCreateRequest()
    .then(response => {
      data = response;
      console.log(data);
      return data;
    })
    .catch(error => console.log(error));
};


if (isNodeEnv === 'production') {
  retrieveCreateRequest();
}

export {
  retrieveCreateRequest
}
