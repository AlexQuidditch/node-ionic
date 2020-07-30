import { join } from 'path'
import * as express from 'express'
import * as bodyParser from 'body-parser'

import cors from './cors'
import morgan from './morgan'

import routes from './routes'

const server = express()

server
  .use(cors)
  .use(morgan)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

server
  .use(routes)
  .use('/uploads', express.static(join(__dirname, '../../uploads')))

export default server
