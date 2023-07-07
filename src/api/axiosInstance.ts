import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_MODE === 'development' ? 
                  process.env.NEXT_PUBLIC_DEVELOPMENT_URL : 
                  process.env.NEXT_PUBLIC_PRODUCTION_URL
                  console.log('process.env.MODE', process.env.NEXT_PUBLIC_MODE)
console.log('BASE_URL', BASE_URL)
                  
const MEDIA_URL = process.env.NEXT_PUBLIC_MODE === 'development' ? 
                    process.env.NEXT_PUBLIC_MEDIA_PATH_DEVELOPMENT : 
                    process.env.NEXT_PUBLIC_MEDIA_PATH_PRODUCTION
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export { BASE_URL, MEDIA_URL, axiosInstance };
