import Sequelize, { Model } from 'sequelize';
import bycrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    // super.init é mesma coisa de Model.init sintaxe do es6+
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bycrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bycrypt.compare(password, this.password_hash);
  }
}
export default User;
