// @ts-nocheck
import React, {useMemo} from 'react'
import { useQuery } from 'react-query';
import { useTranslation } from 'next-i18next';
import recipes from '../../public/JsonData/recipes'
import { Card } from '../card/Card';
import { Section } from '../layout/Section';
import { SimpleSlider } from '../slider/Slider';
import { getRecepts } from '../api/Queries/Getters';
import { MEDIA_URL } from '../api/axiosInstance';


const RecipesCarousel = () => {
    const { t, i18n } = useTranslation()
    const language = i18n.language

    const {data} = useQuery('getRecepts', () => getRecepts())

    const items = useMemo(() => {
      return data?.map(item => (
        <div key={item.recept_guid} className='max-w-xs mx-auto'>
          <Card imgUrl={`${MEDIA_URL}/recept/${item.image_name}`} name={item.recepts[language]} preparation={item.preparation[language]} key={item.id}/>
        </div>
      ))
    }, [data])

    return (
        <div className='relative bg-carousel-bg py-14 px-10' id='recipes'>
            <h1 className='font-lobster font-body text-5xl text-center'>{t('recipes')}</h1>
            <p className='text-center pt-5 pb-24 w-full md:w-1/2 mx-auto'>{t('recipes_txt')}</p>
            <Section yPadding='py-0'>
              <SimpleSlider data={items} />
            </Section>
        </div>
    )
}


export {RecipesCarousel}
