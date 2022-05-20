import { GET_ALL_PRODUCTS, GET_FORMAT_PRODUCTS } from '@utils/constans'

export default (state, action) => {
  const { payload, type } = action

  switch(type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload,
        productsInitial: payload
      }
    case GET_FORMAT_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    default:
      return state
  }
}