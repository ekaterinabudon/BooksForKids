module.exports = {
  async up(db) {
    db.createCollection('russianbooks')
  },

  async down(db) {
    db.collection('russianbooks').drop()
  },
}
