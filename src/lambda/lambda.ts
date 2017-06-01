// import * as awsServerlessExpress from 'aws-serverless-express';
import app from './server-aot';
const awsServerlessExpress: any = require('aws-serverless-express');

const server = awsServerlessExpress.createServer(app);
export const handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
