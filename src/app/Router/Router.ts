import { Route } from './Route';
import { BaseController } from '../Components/BaseController';
import { RequestMethod } from './RequestMethod';
import { IBaseController } from '../Components/IBaseController';

declare type ConstructorFunction<T> = {
    new (...args: any[]): T;
};

export class Router {

    static routes: Route<IBaseController>[] = [];

    static addRoute(requestUrl: string, requestMethod: RequestMethod, instance: ConstructorFunction<IBaseController>, instanceMethod: string) {
        this.routes.push({requestUrl, requestMethod, instance, instanceMethod});

        return this;
    }

    static get(requestUrl: string, instance: ConstructorFunction<IBaseController>, instanceMethod: string) {
        return this.addRoute(requestUrl, 'GET', instance, instanceMethod);
    }
}
