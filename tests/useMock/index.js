/**
 * 使用 Mock.js 模擬 Api
 * @param {*} useMock 是否使用 Mock Api
 */
const useMock = (useMock = false) => {
  useMock = process.env === 'production' ? false : useMock
  if (useMock) {
    console.log('using mock...')
    require('../mock-api')
  }
}

export default useMock
