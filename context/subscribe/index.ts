'use client'
import { createDomain, createEffect } from 'effector'
import toast from 'react-hot-toast'
import { SubscribeFx } from '@/types/common'
import api from '@/api/apiInstance'
import { onSubscribeSuccess } from '@/lib/utils/subscribe'

export const subscribe = createDomain()

export const handleSubscribe = subscribe.createEvent<SubscribeFx>()
export const setSubscribed = subscribe.createEvent<boolean>()

export const subscribeFx = createEffect(
    async ({ email }: SubscribeFx) => {

        const { data } = await api.post('/api/users/subscribe', {
            email,
        })

        if (data.warningMessage) {
            toast.error(data.warningMessage)
            return
        }

        onSubscribeSuccess('Success, you have been subscribed', data)

        return data
    }
)