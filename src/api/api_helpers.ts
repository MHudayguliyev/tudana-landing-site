import { axiosInstance } from "./axiosInstance";

export async function get<R>(url: string, config = {}): Promise<R> {
  return axiosInstance.get(url, { ...config }).then(response => response.data);
}
export async function post<R>(url: string, data: any, config = {}): Promise<R> {
  return axiosInstance.post(url, {...data},  { ...config }).then(response => response.data);
}