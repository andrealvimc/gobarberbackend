import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Andre',
    email: 'andre@alvim.net',
    password_hash: 'wefsfsdgfd3453gfgf',
  });

  return res.json(user);
});

export default routes;
