import { Router } from 'express'
const router = Router({ strict: true })

import { upload } from '../multer'

import { UserController } from '../../services'
import { User } from '@//models'

router.get('/', async (_req, res) => {
  const users = await UserController.list()
  res.json({ users })
})

router.get('/:id', async ({ params: { id } }, res) => {
  const user = await UserController.getById(id)
  res.json({ user })
})

router.post('/', upload.single('avatar'), async (req, res) => {
  try {
    const user: Omit<User, 'id'> = req.body
    const file = req.file

    if (!file) {
      res.status(400).send({
        status: false,
        data: 'No file is selected.',
      })
    } else {
      const result = await UserController.create({
        avatar: file.path.replace('\\', '/'),
        firstName: user.firstName,
        lastName: user.lastName,
        birthday: user.birthday,
        city: user.city,
      })

      res.json({ user: result })
    }

  } catch (err) {
    res.status(500).send(err)
  }
})

export default router
