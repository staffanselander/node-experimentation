import { BaseRepository } from '../../BaseRepository';
import { MessageSequelize } from '../Model/MessageSequelize';
import { MessageEntity } from '../Model/MessageEntity';

export class MessageRepository extends BaseRepository {

    constructor(protected entity: MessageEntity) {
        super();
    }

    public getMessages(callback): void {
        MessageSequelize.all()
            .then((messages) => {
                if (callback) callback(messages);
            });
    }

    public createMessage(callback): void {
        MessageSequelize.create({
            title: 'asdasd',
            message: 'asdasdasd'
        }).then((message) => {
            if (callback) callback(message);
        });
    }
}
