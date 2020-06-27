const Schmervice = require('schmervice');


module.exports = class UserService extends Schmervice.Service {
    async userCreate(payload) {
        const { User } = this.server.models();
        const user = await User.query().insert(payload)
        return user;
    }
}