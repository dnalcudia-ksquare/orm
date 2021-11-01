import { Sequelize } from 'sequelize/types';
import { UserModelInitializer } from './User';
import { PostModelInitializer } from './Post';
import { Comment } from './Comment';

export const registerSQLModels = (client: Sequelize) => {
  /**
   * This is the place where your models will be initialized
   * 
   */
  new UserModelInitializer(client).initialize();
  new PostModelInitializer(client).initialize();
  Comment.init();
}
