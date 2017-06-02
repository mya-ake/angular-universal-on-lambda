import * as fs from 'fs';
import { renderModuleFactory } from '@angular/platform-server';

const templateCache = {}; // cache for page templates
const outputCache = {};   // cache for rendered pages

export const ngUniversalEngine = (setupOptions: any) => {
  return (filePath: string, options: { req: Request }, callback: (err: Error, html: string) => void) => {
    const url: string = options.req.url;
    const html: string = outputCache[url];
    if (html) {
      // return already-built page for this url
      console.log('from cache: ' + url);
      callback(null, html);
      return;
    }
    console.log('building: ' + url);
    if (!templateCache[filePath]) {
      const file = fs.readFileSync(filePath);
      templateCache[filePath] = file.toString();
    }

    // render the page via angular platform-server
    const appModuleFactory = setupOptions.bootstrap[0];
    renderModuleFactory(appModuleFactory, {
      document: templateCache[filePath],
      url: url
    }).then(str => {
      outputCache[url] = str;
      callback(null, str);
    });
  };
};
