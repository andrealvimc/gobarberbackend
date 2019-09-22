import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    // super.init é mesma coisa de Model.init sintaxe do es6+
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
export default File;
