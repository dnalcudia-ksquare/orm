import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { PostsService } from 'src/services'; // This should not be here

export class PostPostController implements Controller {
  constructor(private service: PostsService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { text, userId } = req.body;

    try {
      const post = await this.service.addPost({ text, userId });
      response.status(httpStatus.CREATED).json(post);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
