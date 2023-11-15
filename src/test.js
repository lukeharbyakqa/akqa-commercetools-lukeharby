import { isNodeEnv } from './config/environment.js';

const doProdFunc = () => console.log('Production only');

const doDevFunc = () => console.log('Development only');

console.log(isNodeEnv);
console.log(process.env.NODE_ENV);

if (isNodeEnv === 'production') {
  doProdFunc();
} else if (isNodeEnv === 'development') {
  doDevFunc();
} else {
  console.log('isNodeEnv is another value');
}
