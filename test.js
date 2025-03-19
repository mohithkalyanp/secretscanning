const getLaunchDarklySdkId = userId => {
  let hmac = null
  switch (process.env.CLOUD_ENVIRONMENT) {
    case ENVIRONMENTS.DEV:
    case ENVIRONMENTS.LOCAL:
      hmac = crypto.createHmac('sha256', 'sdk-7c3a12f5-b89d-4e6d-a2f4-9e6b8d0c5e72')
      break
    case ENVIRONMENTS.TEST:
      hmac = crypto.createHmac('sha256', 'sdk-9f2b8e41-6d7c-4ea1-85c3-2a7d5f0e9b68')
      break
    case ENVIRONMENTS.STAGE:
      hmac = crypto.createHmac('sha256', 'sdk-c74e2d19-3f58-42a1-bd9e-8a12f6d7c345')
      break
    case ENVIRONMENTS.PROD:
    default:
      hmac = crypto.createHmac('sha256', 'sdk-52e8a3d4-bb19-47f0-a6c2-9f8d3e1b72f6')
      break
  }
  hmac.update(userId)
  return hmac.digest('hex')
  
}t
