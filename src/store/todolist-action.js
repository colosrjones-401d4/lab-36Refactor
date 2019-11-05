export const additem = data => {
  return {
    type: "ADD",
    payload: data
  };
};

export const deleteitem = id => {
  return {
    type: "DELETE",
    payload: id
  };
};

export const toggleComplete = id => {
  return {
    type: "TOGGLE",
    payload: id
  };
};

export const toggleDetails = id => {
  return {
    type: "DETAILS",
    payload: id
  };
};
