import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { CommentsService } from 'src/services'; // This should not be here

export class CommentsPostController implements Controller {
  constructor(private service: CommentsService) {};

  async run(req: Request, response: Response): Promise<void> {
    
    const { text, userId } = req.body;
    let { id } = req.params;
    const postId = parseInt(id)
    
    try {
      const Comments = await this.service.addComment({ text, userId, postId });
      response.status(httpStatus.CREATED).json(Comments);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
