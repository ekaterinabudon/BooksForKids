'use client'

import toast from 'react-hot-toast'
import {
  setSubscribed,
  subscribe,
  subscribeFx,
} from '.'

export const $isSibscribed = subscribe
  .createStore(false)
  .on(setSubscribed, (_, isSibscribed) => isSibscribed)

export const $subscribe = subscribe
.createStore({})
.on(subscribeFx.done, (_, { result }) => result)
.on(subscribeFx.fail, (_, { error }) => {
toast.error(error.message)
})
