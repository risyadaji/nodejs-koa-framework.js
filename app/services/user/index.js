const { User } = require('./user');

module.exports = {
  async listAllUsers(ctx) {
    const users = await User.query();

    ctx.body = users;
  },

  async findUser(ctx) {
    const { id } = ctx.params;
    const user = await User.query().findById(id);

    ctx.body = user;
  },
};
