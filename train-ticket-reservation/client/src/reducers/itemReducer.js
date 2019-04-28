import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  tickets: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        ticket: action.payload,
        loading: false
      };
    case ADD_ITEM:
      return {
        ...state,
        tickets: [action.payload, ...state.tickets]
      };
    case DELETE_ITEM:
      return {
        ...state,
        tickets: state.tickets.filter(ticket => ticket._id !== action.payload)
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
