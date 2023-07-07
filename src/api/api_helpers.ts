import { axiosInstance } from "./axiosInstance";

export async function get<R>(url: string, config = {}): Promise<R> {
  
  return axiosInstance.get(url, { ...config }).then(response => response.data);
}