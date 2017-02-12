import 'reflect-metadata';

import { Application } from '../app/Application';

let app = new Application;

app.run()
    .then(() => console.info('Application is running.'));
