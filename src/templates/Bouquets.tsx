import React, {useEffect, useMemo, useState} from 'react'
import { useQuery } from 'react-query';
import { Section } from '../layout/Section';
import { useTranslation } from 'next-i18next';
/// react icons
import {RxCross2} from 'react-icons/rx'
import { SimpleSlider } from '../slider/Slider';

import { getBouquets } from '../api/Queries/Getters';
import { Bouquets as BouquetTypes } from '../api/Types/bouquets';
import { MEDIA_URL } from '../api/axiosInstance';
import 'react-alice-carousel/lib/alice-carousel.css';
const Bouquets = () => {
    const { t } = useTranslation()
    const [model, setModel] = useState(false);
    const [bouquetsData, setBouquetsData] = useState<BouquetTypes[]>([])

    const {
      data, 
      isLoading, 
      isError
    } = useQuery('getBouquets', () => getBouquets())

    const [imgSrc, setImgSrc] = useState('');
    const getImg = (proId: string, imgId:string) => {
      setModel(true)
      bouquetsData?.map(item =>  {
        if(item.product_guid === proId && item.image_guid !== imgId){
          setImgSrc(`${MEDIA_URL}/product/${item.image_name}`)
        }
      })
    }
    const handleDragStart = (e : any) => e.preventDefault();
    useEffect(() => {
      if(!isError && !isLoading)
        setBouquetsData(data)
    }, [data])


    const items = useMemo(() => {
      let data = [...bouquetsData]
      for(let i = 0; i < data.length; i++){
        if(data[i]?.product_guid === data[i+1]?.product_guid){
          data.splice(i+1, 1)
        }
      }
      return data?.map(item => (
        <div className='w-full cursor-pointer p-5'>
        <img 
          src={`${MEDIA_URL}/product/${item.image_name}`}
          key={item.image_guid}
          onDragStart={handleDragStart}
          role='presentation'
          alt='Bouquets carousel item'
          onClick={() => getImg(item.product_guid, item.image_guid)}
        />
        </div>
      ))
    }, [bouquetsData])

    return (
        <div className='relative bg-carousel-bg mx-auto py-14' id='bouquets'>
          {
            model ? 
            <div className='fixed w-full h-full top-0 left-0 bg-gray-300 z-50 bg-slate-900 flex justify-center'>
              <div className='absolute right-0 text-white-500 p-10 cursor-pointer' onClick={() => setModel(false)}><RxCross2 size={32}/></div>
              <div className='relative rounded-2xl mx-auto w-96 inset-y-16'>
                <img src={imgSrc}  alt='Modal image' style={{borderRadius: '15px'}}/>
              </div>
            </div> : ''
          }
            <h1 className='font-bold font-lobster px-10 text-3xl md:text-5xl text-center'>{t('bouquets')}</h1>
            <p className='text-center pt-5 px-10 pb-14 w-full md:w-1/2 mx-auto'>{ t('bouquets_txt')}</p>
              <Section yPadding='py-0'>
                <SimpleSlider data={items} />
              </Section>
        </div>
    )
}


export {Bouquets}