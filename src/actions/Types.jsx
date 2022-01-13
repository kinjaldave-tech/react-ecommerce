export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FILTER_PRODUCTS_BY_CATEGORY = "FILTER_PRODUCTS_BY_CATEGORY";
export const FILTER_PRODUCTS_BY_PRICE = "FILTER_PRODUCTS_BY_PRICE";


export function fetchProducts() {
  return {
    type: FETCH_PRODUCTS,
    payload: []
  }
}

export function filtercategory() {
  return {
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: []
  }
}

  export function filterPrice() {
  return {
    type: FILTER_PRODUCTS_BY_PRICE,
    payload: []
  }
}