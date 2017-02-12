import { MessageController } from './Components/Message/Controller/MessageController';
import { Router } from './Router/Router';

Router.get('/', MessageController, 'getAllMessages');
Router.get('/message/create', MessageController, 'createMessage');

export const routes = Router.routes;
