import axios from 'axios'
import { BASE_URL } from '@utils/constans'


export const getCategoriesApi = async () => {
  const response = await axios.get(`${BASE_URL}/v1/categories`)
  return response
}

export const getCategoriApi = async (id) => {
  const response = await axios.get(`${BASE_URL}/v1/categories/${id}`)
  return response
}