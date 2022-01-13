import data from "../components/Data.json";

const initialState = { filter: [], singleProduct: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        filter: action.payload,
      };
    case "SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
      };
    case "SEARCH":
      return { ...state, filter: action.payload };
    case "DROP":
      return { ...state, filter: action.payload };
    case "PRICE":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
