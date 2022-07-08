/**
 * @file 避免ios關閉軟鍵盤頁面不回彈，導致底部空白的問題。
 * @see https://www.cnblogs.com/xiongzaiqiren/p/10505490.html
 */

function getScrollTop () {
  let scrollTop = 0
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop
  } else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}

function addKeyboardListener () {
  document.body.addEventListener('focusin', () => {
    // 軟鍵盤彈起事件
    oldScrollTop = getScrollTop()
  })
  document.body.addEventListener('focusout', () => {
    // 軟鍵盤關閉事件
    document.body.scrollTop = oldScrollTop
    document.documentElement.scrollTop = oldScrollTop
  })
}

let oldScrollTop = getScrollTop()

export default addKeyboardListener
