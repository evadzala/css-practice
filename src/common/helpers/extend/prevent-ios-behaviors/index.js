import preventKeyboardBehavior from './keyboard'
import preventScaleBehavior from './scale'

function isiOS () {
  return (
    [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod',
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
  )
}

/**
 * 防止 ios 預設行為
 */
export default function preventIosBehavior () {
  if (isiOS()) {
    preventKeyboardBehavior()
    preventScaleBehavior()
  }
}
