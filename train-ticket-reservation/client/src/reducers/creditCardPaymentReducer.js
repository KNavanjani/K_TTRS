import { ADD_CREDITCARDPAYMENT, GET_CREDITCARDPAYMENT } from "../actions/types";

const initialState = {
  creditCardPayments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CREDITCARDPAYMENT:
      return {
        ...state,
        creditCardPayments: [action.payload, ...state.creditCardPayments]
      };
    case GET_CREDITCARDPAYMENT:
      return {
        ...state,
        //ticket*s
        creditCardPayment: action.payload
      };

    default:
      return state;
  }
}
