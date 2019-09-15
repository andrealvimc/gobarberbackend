import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    // super.init é mesma coisa de Model.init sintaxe do es6+
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}
export default User;
