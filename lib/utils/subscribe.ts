import toast from 'react-hot-toast'
import { setSubscribed } from '@/context/subscribe'

export const onSubscribeSuccess = <T>(message: string, data: T) => {
  localStorage.setItem('subscribed', JSON.stringify(data))
  toast.success(message)
  setSubscribed(true)
}