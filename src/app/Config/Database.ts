import { createConnection } from 'typeorm';
import { MessageEntity } from '../Components/Message/Model/MessageEntity';

export const databaseConnection = createConnection({
        driver: {
            type: 'mysql',
            host: 'database',
            port: 3306,
            username: 'hackuser',
            password: 'hackpass',
            database: 'hackdb'
        },
        entities: [
            MessageEntity
        ],
        autoSchemaSync: true
    })
    .catch(console.error);
