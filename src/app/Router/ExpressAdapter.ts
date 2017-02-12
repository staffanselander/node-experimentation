import { Adapter } from './Adapter';
import * as express from 'express';
import { IBaseController } from '../Components/IBaseController';

export class ExpressAdapter extends Adapter {

    public register(expressApp: express.Application): this {
        let router = express.Router();

        this.routes.forEach((route) => {
            router[route.requestMethod.toLowerCase()](route.requestUrl, (request, response) => {
                let instance = this.app.get<IBaseController>(route.instance)
                    .setRequest(request)
                    .setResponse(response);

                instance[route.instanceMethod]();
            });
        });

        expressApp.use('/', router);

        return this;
    }
}
