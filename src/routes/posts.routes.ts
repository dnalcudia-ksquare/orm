import { Router, Request, Response } from 'express';
import { postGetByIdController, postsGetController, postsPostController, postUpdateController, postDeleteController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /posts
   * Create a new post
   */
  router.post('/users/:id/posts', (req: Request, res: Response) => postsPostController.run(req, res));
  
  /**
   * GET /
   * Get all posts
   */
  router.get('/posts', (req: Request, res: Response) => postsGetController.run(req, res));

  /**
   * GET /
   * Get a single post
   */
  router.get('/posts/:id', (req: Request, res: Response) => postGetByIdController.run(req, res));

  /**
   * PUT /
   * Update a single post
   */

  router.put('/posts/:postId', (req: Request, res: Response) => postUpdateController.run(req, res));

  /**
   * DELETE /
   * Delete a single post
   */

  router.delete('/posts/:id', (req: Request, res: Response) => postDeleteController.run(req, res));
};
