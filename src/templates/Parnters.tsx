import React from 'react'
import { Section } from '../layout/Section'
import { useQuery } from 'react-query'
import { useTranslation } from 'next-i18next'

import { getPartners } from '../api/Queries/Getters'
import { MEDIA_URL } from '../api/axiosInstance'

const Partners = () => {
    const {t} = useTranslation()
    const {
      data, 
      isLoading, 
      isError
    } = useQuery('getPartners', () => getPartners())

    return (
        <Section>
            <div className='partners pb-24'>
                <h4 className='text-4xl text-center'>{t('our_parnters')}</h4>
                <div className='flex  justify-center items-start gap-6 flex-wrap  pt-10' >
                    {
                      !isError && !isLoading && 
                      data?.map(item => (
                        <img style={{width: '200px', height: '140px', objectFit: 'fill'}} key={item.partner_guid} src={`${MEDIA_URL}/partner/${item.image_name}`} alt={item.partner_name}/>
                      ))
                    }
                </div>
            </div>
        </Section>
    )
}

export  {Partners}