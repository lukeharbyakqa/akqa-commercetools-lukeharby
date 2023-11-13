import dotenv from 'dotenv';

dotenv.config();

const doProdFunc = () => console.log('Production only');

const doDevFunc = () => console.log('Development only');

let isNodeEnv = process.env.NODE_ENV;
console.log(isNodeEnv);
console.log(process.env.NODE_ENV);

if (isNodeEnv === 'production') {
  doProdFunc();
} else if (isNodeEnv === 'development') {
  doDevFunc();
} else {
  console.log('isNodeEnv is another value');
}
