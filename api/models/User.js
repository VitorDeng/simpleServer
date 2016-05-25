/**
 * User
 * (用户表)
 *
 * `User` 是一个存在于 `localMysql_core`连接数据库，表名为 `user` 的对象关系映射.
 *  (`localMysql_core` 详见 `sails.config.connections`)
 *
 */

var bcrypt = require('bcryptjs');

module.exports = {

  connection: 'localMysql_core',
  tableName: 'user',

  attributes: {

    id: {
      type: 'integer',
      unique: true,
      primaryKey: true
    },

    name: {
      type: 'string',
      unique: true,
      required: true
    },

    password: {
      type: 'string',
      required: true
    }

  },

  // 创建（注册）用户前，对用户密码加密
  beforeCreate: function (values, cb) {
    sails.log.debug('进入User.beforeCreate');

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(values.password, salt, function (err, hash) {
        if (err) {
          sails.log.warn('User.beforeCreate :: 异常：'+err);
          return cb(err);
        }else {
          values.password = hash;
          return cb();
        }
      });
    });
  },

  afterCreate: function (createdUser, cb) {
    cb();
  },

  afterUpdate: function (user, cb) {
    cb();
  }

};

