import { DataTypes, Model, Sequelize, Optional } from 'sequelize'
import { ModelInitializer } from './ModelInitializer';
import { User } from './User';

export interface PostAttributes {
    id: number;
  text: string;
  userId: number
}

export interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

export class Post extends Model<PostAttributes, PostCreationAttributes> {
  // Not nulleable attributtes
  public id!: number;
  public text!: string;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export class PostModelInitializer implements ModelInitializer {

  constructor(private client: Sequelize) {};
  
  initialize(): void {
      Post.init({
          id: {
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.INTEGER,
          },
          text: {
              allowNull: false,
              type: new DataTypes.STRING(128),
        },
          userId: {
              allowNull: false,
              type: DataTypes.INTEGER,
          },
    }, {
      // Other model options go here
      sequelize: this.client, // We need to pass the connection instance
      modelName: 'Post' // We need to choose the model name
      });
    User.hasMany(Post, { as: 'posts' })
    Post.belongsTo(User, {
    foreignKey: "userId",
    as: "user",
    });
  }
};

