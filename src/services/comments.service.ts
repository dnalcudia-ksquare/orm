import { Condition } from 'mongoose';
import { Comment, CommentCreationAttributes, CommentAttributes } from '../models/Comment';

export class CommentsService {
  async addComment(commentInfo: CommentCreationAttributes): Promise<CommentAttributes> {
    try {
      var comment = new Comment(commentInfo);
      comment.save();
      return comment;
    } catch (error) {
      throw new Error('Error creating a comment');
    }
  }

  async getComments(postId: string): Promise<Array<CommentAttributes>> {
    try {
      return await Comment.find({postId: postId as Condition<number>});
    } catch (error) {
      throw new Error('Error getting comments');
    }
  }

  async updateComment(commentId: string,text: string): Promise<String> {
    Comment.findByIdAndUpdate(
      commentId,
      { text: text },
      { new: true },
      (err, todo) => {
        if (err) return "Error updating comment";
      });
      return "Comment succesfully updated!";
  }

    async deleteComment(commentId: string): Promise<String> {
    Comment.findByIdAndRemove(
      commentId, (err: string) => {
        if (err) return "Error deleting that comment";
      });
      return "Comment succesfully deleted!";
  }
}

