const User = require('../models/user')
const BaseService = require('./base-service')

class UserService extends BaseService{

}

module.exports = new UserService(User)