import Link from 'next/link'
import Image from 'next/image'
import { useUnit } from 'effector-react'
import { useState, useTransition } from 'react'
import { useLang } from '@/hooks/useLang'
import { handleCloseSearchModal } from '@/lib/utils/common'
import { useDebounceCallback } from '@/hooks/useDebounceCallback'
import { loadProductBySearch, resetProductBySearch } from '@/context/goods'
import { $productsBySearch } from '@/context/goods/state'

const SearchModal = () => {
  const { lang, translations } = useLang()
  const [, setSearchValue] = useState('')
  const [, startTransition] = useTransition()
  const delayCallback = useDebounceCallback(1000)
  const productsBySearch = useUnit($productsBySearch)

  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    e.target.classList.add('with_value')
  }

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (e.target.value) {
      return
    }

    e.target.classList.remove('with_value')
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => setSearchValue(e.target.value))

    if (!e.target.value.length) {
      delayCallback(() => '')
      resetProductBySearch()
      return
    }

    delayCallback(() => loadProductBySearch({ search: e.target.value.trim() }))
  }

  return (
    <div className='search_modal'>
      <button className='search_modal_close' onClick={handleCloseSearchModal} />
      <h3 className='search_modal_title'>
        {translations[lang].header.search_books}
      </h3>
      <div className='search-modal__top'>
        <input
          type='text'
          className='search_modal_input'
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleSearchInputChange}
          placeholder={translations[lang].header.search_info}
        />
      </div>
      <div className='search-modal__bottom'>
        <ul className='list-reset search-modal__results'>
          {(productsBySearch.items || []).map((item) => (
            <li key={item._id} className='search-modal__results__item'>
              <Link
                href={`/catalog/${item.category}/${item._id}`}
                className='search-modal__results__item__link'
                onClick={handleCloseSearchModal}
              >
                <div className='search-modal__results__item__left'>
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={100}
                    height={100}
                    className='search-modal__results__item__img'
                  />
                </div>
                <div className='search-modal__results__item__inner'>
                  <p>{item.name}</p>
                  {item.characteristics.author && (
                    <p>{item.characteristics.author}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchModal
