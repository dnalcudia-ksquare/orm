import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { UsersService } from 'src/services'; // This should not be here

export class UserUpdateController implements Controller {
  constructor(private service: UsersService) {};

  async run(req: Request, response: Response): Promise<void> {
      const { name, username } = req.body;
      const { userId } = req.params;
      const id = parseInt(userId)

    try {
      const user = await this.service.updateUser({ id, name, username });
      response.status(httpStatus.CREATED).json(user);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
