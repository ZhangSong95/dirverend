const api = {
  prod: require('./api/api.prod'),
  dev: require('./api/api.dev')
}
module.exports = {
  state: api[process.env.API_HOST]
}
