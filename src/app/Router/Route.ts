import { RequestMethod } from './RequestMethod';

declare type ConstructorFunction<T> = {
    new (...args: any[]): T;
};

export interface Route<T> {
    requestUrl: string,
    requestMethod: RequestMethod,
    instance: ConstructorFunction<T>,
    instanceMethod: string
}
