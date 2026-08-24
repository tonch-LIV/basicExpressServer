# basicExpressServer

basic server built with 'best practices'

## Changelog

- created repo w/ Node `.gitignore`, MIT license, and README.
- created `dev` branch, ran `npm init -y`, installed `express@4.19.2 dotenv@16.4.5`
  - `--save-dev jest@29.7.0 supertest@6.3.4 nodemon`.
- created sub-directories and empty files; which will be needed, as specified by assignment instructions (view changed files).
- configured `package.json` scripts for `start`, `dev`, `test`, and corrected license from `init` default.
- set up `index.js`; entry and starting point for `server.js`; also loads environment variables.
- defined middleware for logging and `name` validation.
- defined error handlers for unknown paths and unsupported methods.
- defined `server.js`; flow for requests should be,
  - logger,  
    - 404 handler, IF no route and method combo matches.
  - GET /person, 
  - validator,  
    - IF `name` is missing,  
    - next(Error),  
    - 500 handler.  
  - getPerson,
  - JSON response