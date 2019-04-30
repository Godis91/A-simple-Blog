export const deletePost = id => {
  return dispatch => {
    dispatch({
      type: "DELETE_POST",
      id
    });
  };
};
