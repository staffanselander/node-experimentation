import { ServiceProvider } from './ServiceProvider';
import { Application } from '../Application';
import { MessageController } from '../Components/Message/Controller/MessageController';
import { MessageRepository } from '../Components/Message/Repository/MessageRepository';

export class ControllerServiceProvider extends ServiceProvider {

    public register(): void {

        this.app.bind(MessageController, function(app: Application) {
            return new MessageController(
                app.get<MessageRepository>(MessageRepository)
            );
        });
    }
}
