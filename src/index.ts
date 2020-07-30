import config from './config'

import server from './server'

(async () => {
  try {
    await server.listen(config.port)
    console.log('Server ready at:', config.port)
    console.log('Service name: API')
  } catch (error) {
    console.error(error)
  }
})()
