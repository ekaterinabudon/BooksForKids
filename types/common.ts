import { StoreWritable } from 'effector'
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'

export interface IAmProduct {
  _id: string
  count?: number
  type: string
  category: string
  collection: string
  price: number
  name: string
  // authors: string
  description: string
  characteristics: { [index: string]: string }
  images: string[]
  vendorCode: string
  inStock: string
  isBestSeller: boolean
  isNew: boolean
  isDiscount: string
  popularity: number
  errorMessage?: string
  paymentLink: string
}

export interface IAmBaseEffectProps {
  jwt: string
  id: string
}

export type UseGoodsByAuth<T> = StoreWritable<T>

export interface BurgerItem {
  id: number
  href: string
  text: string
}

export interface InputEmailFooter {
  email: string
}

export interface SubscribeFx {
  email: string
}

export interface EmailFooterInput {
  register: UseFormRegister<InputEmailFooter>
  errors: Partial<FieldErrorsImpl<InputEmailFooter>>
}