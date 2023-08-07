import express, { Router } from 'express';

import authentication from './authentication';

const router = express.Router();

export default (): Router => {
  console.log(1);
  authentication(router);
  console.log(2);
  return router;
};
