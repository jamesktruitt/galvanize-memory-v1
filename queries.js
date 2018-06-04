const database = require("./database-connection");

module.exports = {
  list() {
    return database('resolutions_table').select();
  },
  read(id) {
    return database('resolutions_table').select().where('id', id).first();
  },
  create(resolution) {
    return database('resolutions_table')
      .insert(resolution)
      .returning('*')
      .then(record => record[0]);
  },
  update(id, resolution) {
    return database('resolutions_table')
      .update(resolution)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('resolutions_table').delete().where('id', id);
  }
};
