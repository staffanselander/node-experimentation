import * as express from 'express';
import { IBaseController } from './IBaseController';

export class BaseController implements IBaseController {

    /**
     * @type {express.Request}
     */
    protected request: express.Request;

    /**
     * @type {express.Response}
     */
    protected response: express.Response;

    public setRequest(request: express.Request) {
        this.request = request;

        return this;
    }

    public setResponse(response: express.Response) {
        this.response = response;

        return this;
    }
}
