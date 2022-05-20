import axios from 'axios'
import { BASE_URL } from '@utils/constans'


export const getProductsApi = async ({ offset, limit}) => {
  const params = {
    offset,
    limit
  }
  const response = await axios.get(`${BASE_URL}/v1/products`, {params})
  return response
}

export const getProductApi = async (idProduct) => {
  const response = await axios.get(`${BASE_URL}/v1/products/${idProduct}`)
  return response
}

export const getProductsByCategoryApi = async (idCategory, { offset, limit }) => {
  const params = {
    offset,
    limit
  }
  const response = await axios.get(`${BASE_URL}/v1/categories/${idCategory}/products`, {params})
  return response.data
}

