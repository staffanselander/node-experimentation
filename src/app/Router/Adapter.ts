import { Route } from './Route';
import { IBaseController } from '../Components/IBaseController';
import { Application } from '../Application';

export abstract class Adapter {

    protected routes: Route<IBaseController>[] = [];

    protected app: Application;

    public setRoutes(routes: Route<IBaseController>[]): this {
        this.routes = routes;

        return this;
    }

    public setApplication(application: Application) {
        this.app = application;

        return this;
    }

    abstract register(instance: any): this;
}
