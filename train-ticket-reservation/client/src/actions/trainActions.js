import axios from "axios";
import { tokenConfig } from "./authActions";
import { GET_TRAINS, ADD_TRAIN, DELETE_TRAIN, ITEMS_LOADING } from "./types";
import { returnErrors } from "./errorActions";

export const getTrains = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/trains")
    .then(res =>
      dispatch({
        type: GET_TRAINS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addTrain = train => (dispatch, getState) => {
  axios
    .post("/api/trains", train, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_TRAIN,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteTrain = id => (dispatch, getState) => {
  axios
    .delete(`/api/trains/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_TRAIN,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
