import { Localization } from '../CustomTypes'
import { Video } from '../Types/Video'
import { Bouquets } from '../Types/bouquets'
import { Partners } from '../Types/partners'
import { Recepts } from '../Types/recepts'
import { Services } from '../Types/services'
import { Statistics } from '../Types/statistics'
import {get} from '../api_helpers'

export const getWhData = () => {
  return get('/get-wh-data')
}
export const getServices = async (): Promise<Services[]> => {
  return get<Services[]>('/get-services')
}
export const getAboutUs = async (): Promise<Localization> => {
  return get<Localization>('/get-aboutus') 
}
export const getStatistics = async (): Promise<Statistics> => {
  return get<Statistics>('/get-statistics')
}
export const getVideo = async (): Promise<Video> => {
  return get<Video>('/get-wh-video')
}
export const getBouquets = async (): Promise<Bouquets[] | any> => {
  return get<Bouquets[]>('/get-products')
}
export const getRecepts = async (): Promise<Recepts[]> => {
  return get<Recepts[]>('/get-recepts')
}
export const getPartners = async ():Promise<Partners[]> => {
  return get<Partners[]>('/get-partners')
}