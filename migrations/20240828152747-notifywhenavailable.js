module.exports = {
  async up(db) {
    db.createCollection('notifywhenavailable')
  },

  async down(db) {
    db.collection('notifywhenavailable').drop()
  },
};
