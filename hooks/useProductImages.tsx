import { useMemo } from 'react'
import { idGenerator } from '@/lib/utils/common'
import { IAmProduct } from '@/types/common'

export const useProductImages = (product: IAmProduct) => {
  const images = useMemo(() => {
    const makeImagesObjects = (imagesArray: string[]) =>
      imagesArray.map((item) => ({
        src: item,
        alt: product.name,
        id: idGenerator(),
      }))

    if (!product.images) {
      console.log(product.images)
    }

    if (product.images.length < 4) {
      const images = []

      for (let i = 0; i < 4; i++) {
        images.push(product.images[0])
      }

      return makeImagesObjects(images)
    }

    return makeImagesObjects(product.images)
  }, [product.images, product.name])

  return images
}
