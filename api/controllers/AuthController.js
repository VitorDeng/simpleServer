
module.exports = {

  processRegister: function (req, res) {
    sails.log.debug('进入AuthController.processRegister');

    var user = req.allParams();
    sails.log.debug('AuthController.processRegister :: 创建用户参数：'+JSON.stringify(user));

    User.create(user).exec(function (err, created) {
      if (err) {
        sails.log.warn('AuthController.processRegister :: 异常：'+err);
        return res.send(err);
      } else {
        sails.log.debug('AuthController.processRegister :: 成功创建用户：'+JSON.stringify(created));
        return res.send(user);
      }
    });
  },

};
