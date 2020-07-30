const config = {
  port: process.env.PORT || 5000,
  uploadPath: process.env.UPLOAD_PATH || 'uploads/',
}

console.log(config)

export default config
