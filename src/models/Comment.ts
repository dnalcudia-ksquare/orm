import { model, Schema } from 'mongoose';

export interface CommentAttributes {
  id?: number;
  text: string;
  userId: number;
  postId: number;
}

export interface CommentCreationAttributes extends CommentAttributes {};

const schema = new Schema<CommentAttributes>({
  id: { type: Number, required: false },
  text: { type: String, required: true },
  userId: { type: Number, required: true },
  postId: { type: Number, required: true },
});

export const Comment = model<CommentAttributes>('Comment', schema);