import React from 'react'
import Image from 'next/image'
import {BsDownload} from 'react-icons/bs'
import { useTranslation } from 'next-i18next';
// import catalogRu from '../../public/assets/catalog/ru.pdf'
// import catalogTm from '../../public/assets/catalog/tm.pdf';
import c1 from '../../public/assets/images/tudana1.png'
import c2 from '../../public/assets/images/tudana2.png'
import c3 from '../../public/assets/images/tudana3.png'
import c4 from '../../public/assets/images/tudana4.png'
import c5 from '../../public/assets/images/tudana5.png'
import c6 from '../../public/assets/images/tudana6.png'
import c7 from '../../public/assets/images/tudana7.png'
import { Section } from '../layout/Section';


const CatalogsGallery = () => {
    const {t} = useTranslation()

    const desktopVariant = (
          <div className='flex flex-col-reverse md:flex-row justify-center flex-wrap md:px-2 px-0'>
            <div className='flex'>
              <div className='flex flex-row'>
                  <div className='p-1'>
                      <Image src={c1} alt="" />
                  </div>
                  <div className='flex flex-col'>
                    <div className='p-1'>
                      <Image src={c2} alt="" />
                    </div>
                    <div className='p-1'>
                      <Image src={c3} alt="" />
                    </div>
                  </div>
              </div>
              <div className='flex flex-col justify-center'>
                  <a href='/assets/catalog/tm.pdf' download  className='m-1 flex justify-center items-center gap-4 bg-green-400 p-8 md:p-16  text-center text-green-500 rounded-lg'>  
                      <span>{t('download')}</span>
                      <BsDownload />
                  </a>
                  <div className=''>
                      <Image src={c4} alt=""/>
                  </div>
              </div>
            </div>
              <div className='flex justify-center flex-row mb-11 order-2'>
                  <div className='p-1'>
                      <Image src={c5} alt="" />
                  </div>
                  <div className='p-1'>
                      <Image src={c6} alt="" />
                  </div>
                  <div className='p-1'>
                      <Image src={c7} alt="" />
                  </div>
              </div>
            </div>
    )
    const mobileVarint = (
      <>
        <div className='flex justify-center flex-row order-2 mt-5'>
          <div className='p-1'>
              <Image src={c5} alt="" />
          </div>
          <div className='p-1'>
              <Image src={c6} alt="" />
          </div>
          <div className='p-1'>
              <Image src={c7} alt="" />
          </div>
        </div>
          <a href='/assets/catalog/tm.pdf' download  className='w-full m-1 flex justify-center items-center gap-4 bg-green-400 text-center p-6 text-green-500 rounded-lg mb-2'>  
            <span>{t('download')}</span>
            <BsDownload />
          </a>
      </>
    )
   
    return (
        <Section xPadding='px-0'>
          <div className='w-full md:w-1/2 mx-auto mb-5'>
              <h1 className='text-center text-2xl md:text-4xl font-bold capitalize leading-relaxed'>{t('catalog_header_txt')}</h1>
          </div>
            <div className='hidden md:block' id='products'>
                {desktopVariant}
            </div>
            <div className='block md:hidden' id='products'>
                {mobileVarint}
            </div>
        </Section>
    )
}

export {CatalogsGallery}

 