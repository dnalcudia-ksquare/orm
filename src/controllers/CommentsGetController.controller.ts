import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { CommentsService } from 'src/services'; // This should not be here

export class CommentsGetController implements Controller {
  constructor(private service: CommentsService) {};

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {      
      const comments = await this.service.getComments(id);
      res.status(httpStatus.CREATED).json(comments);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
