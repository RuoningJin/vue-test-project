module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'vue-test-project',
    user: process.env.DB_USER || 'vue-test-project',
    password: process.env.DB_PASS || 'vue-test-project',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vue-test-project.sqlite'
    }
  }
}