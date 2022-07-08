/**
 * @file 處理時間格式轉換，依賴 date-fns
 * @requires date-fns {@link https://date-fns.org/docs/}
 */

import format from 'date-fns/format'
import formatDistance from 'date-fns/formatDistance'
import isToday from 'date-fns/isToday'

export function formatDate(date) {
  return format(date, 'yyyy/MM/dd')
}

export function formatDateRelative(fromDate, toDate = new Date()) {
  return formatDistance(fromDate, toDate) + (isToday(toDate) ? ' ago' : '')
}
