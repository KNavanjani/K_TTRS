import {
  GET_GOVEMPS,
  ADD_GOVEMP,
  DELETE_GOVEMP,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  govEmps: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GOVEMPS:
      return {
        ...state,
        govEmps: action.payload,
        loading: false
      };
    case ADD_GOVEMP:
      return {
        ...state,
        govEmps: [action.payload, ...state.govEmps]
      };
    case DELETE_GOVEMP:
      return {
        ...state,
        govEmps: state.govEmps.filter(govEmp => govEmp._id !== action.payload)
      };

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
