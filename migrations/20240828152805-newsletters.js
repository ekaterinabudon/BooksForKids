module.exports = {
  async up(db) {
    db.createCollection('newsletters')
  },

  async down(db) {
    db.collection('newsletters').drop()
  },
};
