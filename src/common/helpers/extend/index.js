/**
 * @file 全域初始化設定
 */

import preventIosBehaviors from './prevent-ios-behaviors'
import debug from './debug'

export default function globalInitialize () {
  preventIosBehaviors()
  debug()
}
