/* eslint-disable no-console */

/**
 * 對 console 進行封裝，只允許在開發模式中顯示
 */
export default function debug () {
  // 將原生方法
  for (const m in console) {
    console['_' + m] = console[m]
  }

  if (process.env.NODE_ENV !== 'production') {
    for (const m in console) {
      if (typeof console[m] === 'function' && /^_/.test(m)) {
        console[m] = console[m].bind(console)
      }
    }
  } else {
    for (const m in console) {
      if (typeof console[m] === 'function') {
        console[m] = function () {}
      }
    }
  }
}
