# AKQA commercetools

Check the JS SDK here: https://docs.commercetools.com/sdk/js-sdk-getting-started

## Config
API tokens, secrets, authentication etc are stored in .env file, and should not be pushed to the repo.

You can use .env.example to populate your API keys then save it as .env in the root.


## Prerequisites

1. Access to a commercetools Project and the Merchant Center. If you do not have a commercetools Project, follow our [Getting started guide](https://docs.commercetools.com/getting-started/initial-setup).
2. [Node.js](https://nodejs.org/en/download/) (version 10 or later) must be installed on your computer.

## Setting up your Sunrise Data project

1. [Clone](https://help.github.com/articles/cloning-a-repository/) this repository to your computer.
2. Go to the root of the project, where `package.json` is located, and install all node dependencies with:

```
npm install
```

3. [Create an API client](https://docs.commercetools.com/getting-started/create-api-client) in the Merchant Center.
4. Download the `Environment Variables (.env)` file.

![Client credential in dot env file ](img/client-credentails-in-dotenv.png)

6. Rename this file `.env` and move it to the root of the project.

![The .env file in Visual Studio Code](https://user-images.githubusercontent.com/77231096/172971883-372d4fdd-9d50-4711-ab57-36a0c38c6774.png)

## Node set up

You need to use a version of node that supports fetch. Currently tested with `node ^18`. (We recommend using nvm to switch between node versions)

Use [NVM](http://npm.github.io/installation-setup-docs/installing/using-a-node-version-manager.html) in order to switch node versions.

- `nvm current` check current node version
- `nvm list` check node versions installed
- `nvm use 14` switch to node 14 (you have to choose an explicit version on Windows 14.18.0 for example)

## Commands

1. Clean all existing Project data and import new:

    ```
        npm run start
    ```

2. Clean project data:

    ```
        npm run clean:data
    ```

3. Import Project data:

    ```
        npm run import:data
    ```

4. Clean or import certain data *(e.g. Categories, Products, Customers, etc.)*

    ```
        npm run clean:categories
    ```

    or

    ```
        npm run import:products
    ```
    or

    ```
        npm run import:customers
    ```


### Running a client instance

  ```
    npm run server
  ```

This will open port 8080 on [localhost:8080](http://localhost:8080) and you can test various endpoints are returning data using [socket.io](https://socket.io/).

Requires a CORS extension. For [Firefox, Chrome and Opera](https://mybrowseraddon.com/access-control-allow-origin.html)
