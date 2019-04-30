import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import trainReducer from "./trainReducer";
import creditCardPaymentReducer from "./creditCardPaymentReducer";
import mobileBillPaymentReducer from "./mobileBillPaymentReducer";

export default combineReducers({
  ticket: itemReducer,
  error: errorReducer,
  auth: authReducer,
  train: trainReducer,
  creditCardPayment: creditCardPaymentReducer,
  mobileBillPayment: mobileBillPaymentReducer
});
