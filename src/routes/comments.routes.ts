import { Router, Request, Response } from 'express';
import { commentsGetController, commentsPostController, commentsUpdateController, commentDeleteController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /publishers
   * Create a new comment
   */
  router.post('/posts/:id/comments', (req: Request, res: Response) => commentsPostController.run(req, res));
  
  /**
   * GET /
   * Get all comments from a post
   */
  router.get('/posts/:id/comments', (req: Request, res: Response) => commentsGetController.run(req, res));

  /**
   * PUT /
   * Update a single comment from a post
   */
  router.put('/posts/:id/comments/:commentId', (req: Request, res: Response) => commentsUpdateController.run(req, res));

  /**
   * DELETE /
   * Delete a single comment from a post
   */
  router.delete('/posts/:id/comments/:commentId', (req: Request, res: Response) => commentDeleteController.run(req, res));
};
