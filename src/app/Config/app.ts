import { RepositoryServiceProvider } from '../ServiceProviders/RepositoryServiceProvider';
import { ControllerServiceProvider } from '../ServiceProviders/ControllerServiceProvider';
import { ServiceProvider } from '../ServiceProviders/ServiceProvider';

export const providers: typeof ServiceProvider[] = [
    RepositoryServiceProvider,
    ControllerServiceProvider
];
