import axios from "axios";
import { ADD_CREDITCARDPAYMENT, GET_CREDITCARDPAYMENT } from "./types";

//Add credit card payment
export const addCreditCardPayment = creditCardPayment => dispatch => {
  axios.post("/api/creditCardPayment", creditCardPayment).then(res =>
    dispatch({
      type: ADD_CREDITCARDPAYMENT,
      payload: res.data
    })
  );
};

//Get credit card payment
export const getCreditCardPayment = () => dispatch => {
  axios
    .get("/api/creditCardPayment")
    .then(res =>
      dispatch({
        type: GET_CREDITCARDPAYMENT,
        payload: res.data
      })
    )
    .catch(err => dispatch(err.response.data, err.response.status));
};
