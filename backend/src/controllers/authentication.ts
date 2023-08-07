import { createUser, getUserByEmail } from '../database/users';
import { Request, Response } from 'express';
import { random, authentication } from '../helpers';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

		if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.warn(error);
    return res.sendStatus(400);
  }
};
