import { StaticImageData } from 'next/image';
import { IAmProduct } from './common';

export interface IAmSlide {
    _id?: number
    image: StaticImageData
    title: string
    price?: number
    product?: StaticImageData
    btn_message: string
}

export interface IAmHomePageSectionProps {
    goods: IAmProduct[]
}