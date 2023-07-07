import React from 'react'
import Image from 'next/image'
import { useQuery } from 'react-query';
import {BsTelephone, BsInstagram} from 'react-icons/bs';
import {FaMapMarkedAlt} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { useTranslation } from 'next-i18next';
import { AppConfig } from '../utils/AppConfig';
import logo from '../../public/assets/icons/logo.svg'
import strawberry from '../../public/assets/icons/navBerry.png'
import bouquet from '../../public/assets/icons/bouqet.svg'
import { getServices } from '../api/Queries/Getters';

const Footer = () => {
  const {t} = useTranslation()
  const {data} = useQuery('getServices', () => getServices())

  return (
    <Background color="bg-pink-300">
      <Section yPadding='py-8' xPadding='px-0'>
      <div className='relative footer bg-footer-bg-color w-full' id='contacts'>
                  <div className='flex justify-start md:flex-row flex-col gap-10 items-center px-0 md:px-8'>
                      <Image src={logo} alt="" width={200} height={200} className='p-2' />
                      <div className='flex items-start gap-4 p-3'> 
                        <FaMapMarkedAlt size={24} color='#FD2831' /> 
                        <div className=''>
                            <h4 className='pb-1'>{t('addr1')}</h4>
                            <h4 className='pb-1'>{t('addr2')}</h4>
                            <h4 className='pb-1'>{t('addr3')}</h4>
                        </div>
                      </div>
                      <div className='flex flex-col items-start md:flex-row md:items-center justify-start md:justify-between px-6 md:px-0 gap-7'>
                            <div>
                              <div className='flex items-center  gap-4 mb-7'>
                                  <BsInstagram size={24} color='#FD2831'/>
                                  <span>@tudanatm</span>  
                              </div>
                              {/* <div className='flex items-center gap-4 '>
                                  <BsTelephone size={22} color='#FD2831'/>
                                  <span>+99363935225</span>
                              </div> */}
                              {data?.map(item => (
                                item.service_type==='contact' && 
                                <div key={item.service_guid} className='flex items-center gap-4 '>
                                  <BsTelephone size={22} color='#FD2831'/>
                                  <span>{item.service_contact}</span>
                                </div>
                              ))}
                            </div>
                            <div>

                              {data?.map(item => (
                                item.service_type !== 'contact' && 
                                <div key={item.service_guid} className={`flex items-center gap-4 mb-7`}>
                                  {item.service_type==='straw_ord' ? 
                                    <Image src={strawberry} alt="" width={22} height={22}/> : 
                                   item.service_type==='bouquet_ord' ? 
                                   <Image src={bouquet} alt="" width={28} height={28} className='w-7 h-7'/> : ""
                                    }
                                  <span>{item.service_contact}</span>
                                </div>
                              ))}

                            </div>
                            <div className='flex items-center gap-4 '>
                                  <FiMail size={22} color='#FD2831'/>
                                  <span>tudana.tm@gmail.com</span>
                            </div>
                  </div>
          </div>
                              
          </div>
                  <div className='border-b-2 mx-10 my-8 border-b-border-bottom' />
                  <div className="footer-copyright mx-auto text-center">
                  © {t('copyright')} {new Date().getFullYear()} {AppConfig.title}
                </div>
      </Section>
    </Background>
  )
}


export { Footer };
