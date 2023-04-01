//For Adding Item into Cart

export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

//For Deleting Item to Cart
export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
