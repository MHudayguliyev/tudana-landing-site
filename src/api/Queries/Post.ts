import { post } from "../api_helpers"

export const SendMail = async (values: any) => {
  return post('/send-mail', values)
}