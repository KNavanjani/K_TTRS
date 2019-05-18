import axios from "axios";
import { tokenConfig } from "./authActions";
import { GET_GOVEMPS, ADD_GOVEMP, DELETE_GOVEMP, ITEMS_LOADING } from "./types";
import { returnErrors } from "./errorActions";

//Get govEmps details
export const getGovEmps = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/govEmps")
    .then(res =>
      dispatch({
        type: GET_GOVEMPS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Add govEmp details
export const addGovEmp = govEmp => (dispatch, getState) => {
  axios
    .post("/api/govEmps", govEmp, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_GOVEMP,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Delete govEmp details
export const deleteGovEmp = id => (dispatch, getState) => {
  axios
    .delete(`/api/govEmp/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_GOVEMP,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//Load govEmp details
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
