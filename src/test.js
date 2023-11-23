import { client } from './helpers/createClient.js';

const request = {
  uri: '/me',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

const retrieveClient = () => {
  return client.execute(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

retrieveClient();

export {
  retrieveClient
}
