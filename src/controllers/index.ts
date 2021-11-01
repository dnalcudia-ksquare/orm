import { UserPostController } from './UsersPostController.controller';
import { UsersGetController } from './UsersGetController.controller';
import { UserUpdateController } from './UserUpdateController.controller';
import { UserDeleteController } from './UserDeleteController.controller';
import { UserGetByIdController } from './UserGetByIdController.controller';
import { commentsService, usersService, postsService } from '../services'; // This should not be here
import { CommentsGetController } from './CommentsGetController.controller';
import { CommentsPostController } from './CommentsPostController.controller';
import { CommentUpdateController } from './CommentsUpdateController.controller';
import { CommentDeleteController } from './CommentsDeleteController.controller';
import { PostsGetController } from './PostsGetController.controller';
import { PostPostController } from './PostsPostController.controller';
import { PostGetByIdController } from './PostGetByIdController.controller';
import { PostDeleteController } from './PostDeleteController.controller';
import { PostUpdateController } from './PostUpdateController.controller';


export const usersPostController = new UserPostController(usersService)
export const usersGetController = new UsersGetController(usersService);
export const userUpdateController = new UserUpdateController(usersService)
export const userDeleteController = new UserDeleteController(usersService)
export const userGetByIdController = new UserGetByIdController(usersService);
export const commentsGetController = new CommentsGetController(commentsService);
export const commentsUpdateController = new CommentUpdateController(commentsService);
export const commentDeleteController = new CommentDeleteController(commentsService);
export const commentsPostController = new CommentsPostController(commentsService);
export const postsGetController = new PostsGetController(postsService);
export const postsPostController = new PostPostController(postsService);
export const postGetByIdController = new PostGetByIdController(postsService);
export const postUpdateController = new PostUpdateController(postsService);
export const postDeleteController = new PostDeleteController(postsService);

