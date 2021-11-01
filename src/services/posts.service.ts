import { Post, PostCreationAttributes, PostAttributes } from '../models/Post';

export class PostsService {
  async addPost(postInfo: PostCreationAttributes): Promise<PostAttributes> {
    try {
      const post = await Post.create(postInfo);
      return post;
    } catch (error) {
      throw new Error('Error creating a post');
    }
  }

  async getPosts(): Promise<Array<PostAttributes>> {
    try {
        return await Post.findAll({
          attributes: ["id", "text","userId","createdAt","updatedAt"],
      });
    } catch (error) {
      throw new Error('Error getting posts');
    }
  }
    
  async updatePost(id: number, text: string): Promise<string> {
    try {      
        const post = await Post.update(
        {
          text: text
        },
        { where: { id: id }}
      )
      return `${post[0]} posts succesfully updated!`;
    } catch (error) {
      throw new Error('Error updating a post');
    }
  }

    async deletePost(id: string): Promise<string> {
      try {
        Post.destroy({
        where: {id}
      })
        return "Post succesfully deleted!"
    } catch (error) {
      throw new Error('Error getting that post');
    }
    }
  
    async getPostById(id: string): Promise<Array<Post>> {
    try {
        return await Post.findAll({
            attributes: ["id", "text","userId","createdAt","updatedAt"],
            where: { id: id },
            include: "user"
      });
    } catch (error) {
      throw new Error('Error getting that post');
    }
  }
}