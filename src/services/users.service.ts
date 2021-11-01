import { Post } from '../models/Post';
import { User, UserCreationAttributes, UserAttributes } from '../models/User';

export class UsersService {
  async addUser(userInfo: UserCreationAttributes): Promise<UserAttributes> {
    try {
      const user = await User.create(userInfo);
      return user;
    } catch (error) {
      throw new Error('Error creating a user');
    }
  }

  async updateUser(userInfo: UserCreationAttributes): Promise<String> {
    try {
      const user = await User.update(
        {
          name: userInfo.name,
          username: userInfo.username,
        },
        { where: { id: userInfo.id }}
      )
      return `${user[0]} users succesfully updated!`;
    } catch (error) {
      throw new Error('Error updating that user');
    }
  }

    async deleteUser(id: string): Promise<String> {
    try {
      User.destroy({
        where: {id}
      })
      Post.findAll({ attributes: ['userId'], where: { userId: id } })
        .then(function (userIds: Post[]) {          
          if (userIds.length > 0)            
              Post.destroy({ where: { userId: id } });
        })
      return `User succesfully deleted!`;
    } catch (error) {
      throw new Error('Error deleting that user');
    }
  }

  async getUsers(): Promise<Array<User>> {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error('Error getting users');
    }
  }

  async getUserById(id: string): Promise<Array<User>> {
    try {
        return await User.findAll({
            attributes: ["id", "name","username","createdAt","updatedAt"],
            where: { id: id },
            include: "posts"
      });
    } catch (error) {
      throw new Error('Error getting that user');
    }
  }
}