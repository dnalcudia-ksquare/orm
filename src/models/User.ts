import { DataTypes, Model, Sequelize, Optional } from 'sequelize'
import { ModelInitializer } from './ModelInitializer';

export interface UserAttributes {
  id: number;
  name: string;
  username: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User extends Model<UserAttributes, UserCreationAttributes> {
  // Not nulleable attributtes
  public id!: number;
  public name!: string;
  public username!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export class UserModelInitializer implements ModelInitializer {

  constructor(private client: Sequelize) {};
  
  initialize(): void {
    User.init({
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: new DataTypes.STRING(128),
      },
      username: {
        allowNull: false,
        type: new DataTypes.STRING(128),
      }
    }, {
      // Other model options go here
      sequelize: this.client, // We need to pass the connection instance
      modelName: 'User' // We need to choose the model name
    });
  }
};