import * as express from 'express';

export interface IBaseController {
    setRequest(request: express.Request);
    setResponse(response: express.Response);
}
