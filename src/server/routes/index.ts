import { Router } from 'express'

import upload from './users'

const router = Router({ strict: true })

router
  .use('/users', upload)

export default router
