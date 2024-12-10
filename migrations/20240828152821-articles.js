module.exports = {
  async up(db) {
    db.createCollection('articles')
  },

  async down(db) {
    db.collection('articles').drop()
  },
}
