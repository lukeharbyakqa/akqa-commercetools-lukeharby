import { createRequestBuilder } from '@commercetools/api-request-builder';
import { client } from './helpers/createClient.js';
import { options } from './config/options.js';

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

client.execute(createRequest)
  .then((response) => {
    channelResponse = response.body;
    console.log(channelResponse);
  })
  .catch(error => console.log(error));
