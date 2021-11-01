import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { PostsService } from 'src/services'; // This should not be here

export class PostUpdateController implements Controller {
  constructor(private service: PostsService) {};

  async run(req: Request, response: Response): Promise<void> {
      const { text } = req.body;
      const { postId } = req.params;
      const id = parseInt(postId)

    try {
      const user = await this.service.updatePost( id, text );
      response.status(httpStatus.CREATED).json(user);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
