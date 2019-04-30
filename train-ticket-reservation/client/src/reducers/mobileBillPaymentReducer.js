import { ADD_MOBILEBILLPAYMENT } from "../actions/types";

const initialState = {
  mobileBillPayments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MOBILEBILLPAYMENT:
      return {
        ...state,
        mobileBillPayments: [action.payload, ...state.mobileBillPayments]
      };

    default:
      return state;
  }
}
