module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'http://localhost:8000/api',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://Victoria@localhost/booknation-test',
  JWT_SECRET: process.env.JWT_SECRET || 'cat',
}