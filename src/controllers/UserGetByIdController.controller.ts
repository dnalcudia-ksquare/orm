import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { UsersService } from 'src/services'; // This should not be here

export class UserGetByIdController implements Controller {
  constructor(private service: UsersService) {};

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const user = await this.service.getUserById(id);
            res.status(httpStatus.CREATED).json(user);
        } catch (error) {
           res.status(httpStatus.INTERNAL_SERVER_ERROR);
        }
  }
}
