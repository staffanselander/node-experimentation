import { Application } from '../Application';

export class ServiceProvider {

    protected app: Application;

    public setApplication(app: Application): this {
        this.app = app;

        return this;
    }

    public register(): void {

    };

}
