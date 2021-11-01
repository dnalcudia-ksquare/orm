import { Router, Request, Response } from 'express';
import { usersGetController, usersPostController, userGetByIdController, userUpdateController, userDeleteController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /users
   * Create a new user
   */
  router.post('/users', (req: Request, res: Response) => usersPostController.run(req, res));
  
  /**
   * GET /
   * Get all users
   */
  router.get('/users', (req: Request, res: Response) => usersGetController.run(req, res));

   /**
   * GET /
   * Get a single user and his posts
   */

  router.get('/users/:id', (req: Request, res: Response) => userGetByIdController.run(req, res));

  /**
   * PUT /
   * Update a single user
   */

  router.put('/users/:userId', (req: Request, res: Response) => userUpdateController.run(req, res));

    /**
   * DELETE /
   * Delete a single user
   */

  router.delete('/users/:userId', (req: Request, res: Response) => userDeleteController.run(req, res));

};
