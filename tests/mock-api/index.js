/**
 * @file 自動引入 mock-api 資料夾內的所有檔案
 * 只需要在 mock-api 內增加模擬的接口
 * 就可以模擬 api 串接
 */

const requireComponent = require.context('.', true, /[\w-]+\.js$/)

requireComponent.keys().forEach((fileName) => {
  if (fileName !== './index.js') {
    require('' + fileName)
  }
})
