import * as multer from 'multer'

import config from '../config'

export const upload = multer({
  dest: config.uploadPath,
  limits: { fileSize: 1000000000, files: 5 },
  storage: multer.diskStorage({
    destination: config.uploadPath,
    filename(_req, file, callback) {
      callback(null, file.originalname)
    },
  }),
})
