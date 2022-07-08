/**
 * 禁止 ios 縮放
 * @see http://lcat.me/2019/12/04/ios-safari-%E8%B8%A9%E5%9D%91%E6%97%A5%E8%AE%B0/
 */
function preventScale () {
  document.addEventListener('touchstart', function (event) {
    // 觸點大於1的直接 preventDefault
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  var lastTouchEnd = 0
  document.addEventListener(
    'touchend',
    function (event) {
      var now = new Date().getTime()
      if (now - lastTouchEnd <= 200) {
        event.preventDefault()
      }
      lastTouchEnd = now
    },
    false,
  )
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
}

export default preventScale
