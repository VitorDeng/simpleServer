/**
 * Organized
 * (组织架构表)
 *
 * `Organized` 是一个存在于 `localMysql_core`连接数据库，表名为 `organized` 的对象关系映射.
 *  (`localMysql_core` 详见 `sails.config.connections`)
 *
 */

module.exports = {

  connection: 'localMysql_core',
  tableName: 'organized',

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

    parentid: {
      type: 'integer'
    }

  }
};
