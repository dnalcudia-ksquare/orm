import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "./Controller";
import { PostsService } from 'src/services'; // This should not be here

export class PostsGetController implements Controller {
  constructor(private service: PostsService) {};

  async run(req: Request, res: Response): Promise<void> {
    try {
      const posts = await this.service.getPosts();
      res.status(httpStatus.CREATED).json(posts);
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
