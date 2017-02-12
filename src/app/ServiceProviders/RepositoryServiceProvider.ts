import { ServiceProvider } from './ServiceProvider';
import { MessageRepository } from '../Components/Message/Repository/MessageRepository';
import { MessageEntity } from '../Components/Message/Model/MessageEntity';

export class RepositoryServiceProvider extends ServiceProvider {

    register(): void {
        this.app.bind<MessageRepository>(MessageRepository, function() {
            return new MessageRepository(new MessageEntity);
        });
    }
}
