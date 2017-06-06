import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../../aot/src/lambda/app.server.ngfactory';
import * as express from 'express';
import { ngUniversalEngine } from './universal-engine';
const awsServerlessExpressMiddleware: any = require('aws-serverless-express/middleware');

enableProdMode();

const server: express.Application = express();
server.use(awsServerlessExpressMiddleware.eventContext());

// set our angular engine as the handler for html files, so it will be used to render them.
server.engine('html', ngUniversalEngine({
    bootstrap: [AppServerModuleNgFactory]
}));

// set default view directory
server.set('views', 'dist');

// handle requests for routes in the app.  ngExpressEngine does the rendering.
server.get(['/', '/dashboard', '/heroes', '/detail/:id'], (req: express.Request, res: express.Response) => {
    res.render('index.html', { req });
});

// handle requests for static files
server.get(['/*.js', '/*.css', '/*.ico'], (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const fileName: string = req.originalUrl;
    console.log(fileName);
    const root = fileName.startsWith('/node_modules/') ? '.' : 'dist';
    res.sendFile(fileName, { root: root }, (err: any) => {
        if (err) {
            next(err);
        }
    });
});

export default server;
