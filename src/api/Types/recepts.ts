import { Localization } from "../CustomTypes"

export type Recepts = {
  recept_guid: string, 
  recepts: Localization,
  preparation: Localization
  image_guid:string, 
  image_name:string, 
}