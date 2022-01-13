// const initialState = { 
//     counter: 1
// }

// const reducer = (state = initialState, action) => {
//     return state;
// }

// export default reducer;

import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_PRICE } from "../actions/Types";

const initState = { items: [], filteredItems: [], sort: "" };
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };

    case FILTER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };

    default:
      return state;
  }
}