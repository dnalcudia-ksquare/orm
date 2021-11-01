import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { CommentsService } from 'src/services'; // This should not be here

export class CommentUpdateController implements Controller {
  constructor(private service: CommentsService) {};

  async run(req: Request, response: Response): Promise<void> {
      const { text } = req.body;
      const { commentId } = req.params;

    try {
      const user = await this.service.updateComment( commentId, text );
      response.status(httpStatus.CREATED).json(user);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
