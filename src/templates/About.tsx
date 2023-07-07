import { useQuery } from 'react-query';
import { Background } from '../background/Background';
import { About } from '../about/About';
import { Section } from '../layout/Section';
import {useTranslation} from 'next-i18next'
import { getAboutUs, getStatistics } from '../api/Queries/Getters';

const AboutSection = () => {
  const { t, i18n } = useTranslation()
  const language:string = i18n.language
  const {
    data, 
    isLoading, 
    isError
  } = useQuery('aboutUsTxt', () => getAboutUs())

  const {
    data: statistics
  } = useQuery('getStatistics', () => getStatistics())

  return (
    <div id='about'>
      <Background color='bg-sky-400'>
          <Section>
            <About
              title={ t('about_us_header')}
              // @ts-ignore
              description={!isError && !isLoading && data[language]}
              statistics={statistics}
              image="/assets/images/fruit-juice.png"
              imageAlt="Second feature alt text"
            />
          </Section>
        </Background>
    </div>
  )
  
}

export { AboutSection };
