import * as express from 'express';
import { routes } from './routes';
import { databaseConnection } from './Config/Database';
import { Container } from 'inversify';
import { providers } from './Config/app';
import { ServiceProvider } from './ServiceProviders/ServiceProvider';
import { ExpressAdapter } from './Router/ExpressAdapter';
import { Route } from './Router/Route';
import { IBaseController } from './Components/IBaseController';

export class Application {

    /**
     * Express instance of application
     */
    protected express: express.Application;

    /**
     * Service container for application
     */
    protected container: Container;

    /**
     * Run the application
     *
     * @returns {Promise<void>}
     */
    public async run() {
        this.container = new Container;

        this.createWebserver()
            .registerRoutes(routes)
            .registerProviders(providers);

        await this.makeDatabaseConnection();

        this.startServer();
    }

    protected createWebserver(): this {
        this.express = express();

        return this;
    }

    protected registerProviders(providers: typeof ServiceProvider[]) {
        providers.forEach((provider) => {
            new provider()
                .setApplication(this)
                .register();
        });
    }

    public bind<T>(abstract, callback: (application: Application) => T) {
        this.container.bind(abstract)
            .toDynamicValue(() => callback(this));
    }

    public get<T>(abstract: any): T {
        return this.container.get<T>(abstract);
    }

    protected async makeDatabaseConnection() {
        await databaseConnection;
    }

    protected registerRoutes(routes: Route<IBaseController>[]): this {
        (new ExpressAdapter)
            .setApplication(this)
            .setRoutes(routes)
            .register(this.express);

        return this;
    }

    protected startServer(): this {
        this.express.listen(8080);

        return this;
    }
}

