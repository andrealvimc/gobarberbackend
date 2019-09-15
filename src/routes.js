import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Só vai utilizar o authMiddlewares as rotas abaixo do mesmo
routes.use(authMiddlewares);

routes.put('/users', UserController.update);

export default routes;
