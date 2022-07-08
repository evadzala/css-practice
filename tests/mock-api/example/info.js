import Mock from 'mockjs'

Mock.mock(/example\/info/, {
  'list|1-10': [
    {
      'id|+1': 1,
      email: '@EMAIL',
    },
  ],
})
