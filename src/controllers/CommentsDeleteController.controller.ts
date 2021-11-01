import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { CommentsService } from 'src/services'; // This should not be here

export class CommentDeleteController implements Controller {
  constructor(private service: CommentsService) {};

  async run(req: Request, response: Response): Promise<void> {
      const { commentId } = req.params;

    try {
      const user = await this.service.deleteComment( commentId );
      response.status(httpStatus.CREATED).json(user);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
