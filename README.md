# Host a Standalone Express API on Vercel

### For successfully hosting, Ensure the following:

1. You have a folder named [api](/api/) containing a file named [index.js](api/index.js) in which your [entry file](app.js) (commonly named **app.js** or **server.js**) is imported and then exported.
  
2. Your [vercel configuration file](vercel.json) is in order to support the required request routing.

3. Ensure that the Nodejs version choosen in the settings of the project on Vercel corresponds with the the version used in developing the api locally.
