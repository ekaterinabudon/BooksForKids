const { faker } = require('@faker-js/faker')

let currentMonth = new Date().toLocaleString('en', { month: 'long' });

let currentYear = new Date().getFullYear()
let currentDate = new Date().getDate()

module.exports = {
  async up(db) {
    return db.collection('articles').insertMany([...Array(10)].map(() => {

    const articles = [
      {
      title: faker.lorem.sentence(2),
      bigimage: '/img/blogimg/articlerus1.jpg',
      description: faker.lorem.sentences(10),
      },
    ]

    return {
      category: 'blog',
      articles,
      currentDate,
      currentMonth,
      currentYear,
    }
    }))
  },

  async down(db) {
    return db.collection('articles').updateMany([])
  }
};