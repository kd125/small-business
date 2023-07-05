export const addListing = (listing) => {
  return {
    type: "ADD_LISTING",
    payload: listing,
  };
};

export const removeListing = (index) => {
  return {
    type: "REMOVE_LISTING",
    value: index,
  };
};

export const login = (username) => {
  return {
    type: "LOGIN",
    payload: username,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
