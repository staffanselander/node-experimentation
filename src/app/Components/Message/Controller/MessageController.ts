import { BaseController } from '../../BaseController';
import { MessageRepository } from '../Repository/MessageRepository';

export class MessageController extends BaseController {

    public messageRepository: MessageRepository;

    constructor(messageRepository: MessageRepository) {
        super();

        this.messageRepository = messageRepository;
    }

    public getAllMessages() {
        this.response.setHeader('Content-type', 'application/json');

        console.log(this.request.query);
        console.log(this.request.params);
        console.log(this.request.body);

        this.messageRepository.getMessages((messages) => {
            this.response.send(messages);
        });
    }

    public createMessage() {
        this.response.setHeader('Content-type', 'application/json');

        this.messageRepository.createMessage((message) => {
            this.response.send(message);
        });
    }

}
