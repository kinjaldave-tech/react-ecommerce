import axios from "axios";

let allProducts = [];

export const disAllProducts = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: "Data.json",
    });
    dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: response.data });
    allProducts = response.data;
  } catch (error) {
    dispatch({ type: "ERROR", payload: "" });
  }
};

export const searchProduct = (searchTerm) => async (dispatch) => {
  // dispatch({ type: "CLEAR" });

  try {
    const response = allProducts.filter((curElement) => {
      if (searchTerm == "") {
        return allProducts;
      } else if (
        curElement.title?.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return curElement;
      }
    });
    dispatch({ type: "SEARCH", payload: response });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "" });
  }
};

export const dropProduct = (dropTerm) => async (dispatch) => {
  // dispatch({ type: "CLEAR" });
  try {
    const response = allProducts.filter((curElement) => {
      if (dropTerm == "all") {
        return allProducts;
      } else if (curElement.category?.includes(dropTerm)) {
        return curElement;
      }
    });
    dispatch({ type: "DROP", payload: response });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "" });
  }
};

export const priceProduct = (priceTerm) => async (dispatch) => {
  // dispatch({ type: "CLEAR" });
  try {
    const response = allProducts.filter((curElement) => {
      if (priceTerm >= priceTerm[0]) {
        curElement.price?.includes(priceTerm);
      } else if (priceTerm <= priceTerm[1]) {
        curElement.price?.includes(priceTerm);
      } else {
        return allProducts;
      }
    });
    dispatch({ type: "PRICE", payload: response });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "" });
  }
};

// export const priceProduct = (priceTerm) => async (dispatch) => {
//   // dispatch({ type: "CLEAR" });
//   try {
//     const response = allProducts.filter((curElement) => {
//       if (priceTerm) {
//       }
//     });
//     dispatch({ type: "PRICE", payload: response });
//   } catch (error) {
//     dispatch({ type: "ERROR", payload: "" });
//   }
// };

export const getSingleProduct = (product_id) => async (dispatch) => {
  try {
    const response = allProducts.filter(
      (element) => element.id.toString() === product_id.toString()
    );
    dispatch({ type: "SINGLE_PRODUCT", payload: response });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "" });
  }
};
