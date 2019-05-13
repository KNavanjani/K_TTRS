import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";

//Get ticket details
export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/tickets")
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Add ticket details
export const addItem = ticket => (dispatch, getState) => {
  axios
    .post("/api/tickets", ticket, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Delete ticket details
export const deleteItem = id => (dispatch, getState) => {
  axios
    .delete(`/api/tickets/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Load ticket details
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
