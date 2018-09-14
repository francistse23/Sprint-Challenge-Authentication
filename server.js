const express = require('express');
const cors = require('cors');

const configureRoutes = require('./config/routes');

const server = express();
// const corsOptions = {
//     "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZyYW5jaXMiLCJwYXNzd29yZCI6IiQyYSQxMCRxZGJMMGI0dzBqYTVkRzJnNW4zamhlOWFBUElUWFpsdjV6eXFrM2ovcnRQR2dhaU52NC5kYSIsImlhdCI6MTUzNjk0Mzk4MCwiZXhwIjoxNTM2OTQ3NTgwLCJqdGkiOiJmc3cxMiJ9.rEn2_TFSGg5nLsA6_Xhc0hCAGmK2FJnaoP4kKdRlnvY"
// }

server.use(express.json());
server.use(cors());

configureRoutes(server);

module.exports = {
  server,
};
