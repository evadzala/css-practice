import Mock from 'mockjs'

Mock.mock('/api/example/login', function (options) {
  const params = JSON.parse(options.body)
  if (params && params.id === 12345) {
    return {
      ret: {
        status: true,
        token: 'fdc63102a20164bb5ab19f17dd0f9501',
      },
      error: false,
      msg: false,
    }
  }
  return {
    ret: false,
    error: true,
    msg: 'User not found!!',
  }
})
