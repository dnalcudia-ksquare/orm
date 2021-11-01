import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { UsersService } from 'src/services'; // This should not be here

export class UserDeleteController implements Controller {
  constructor(private service: UsersService) {};

  async run(req: Request, response: Response): Promise<void> {
      const { userId } = req.params;

    try {
      const user = await this.service.deleteUser( userId );
      response.status(httpStatus.CREATED).json(user);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
