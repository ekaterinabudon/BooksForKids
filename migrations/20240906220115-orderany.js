module.exports = {
  async up(db) {
    db.createCollection('orderany')
  },

  async down(db) {
    db.collection('orderany').drop()
  },
};