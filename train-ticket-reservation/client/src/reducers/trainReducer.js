import {
  GET_TRAINS,
  ADD_TRAIN,
  DELETE_TRAIN,
  ITEMS_LOADING
} from "../actions/types";

const initialState = {
  trains: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRAINS:
      return {
        ...state,
        trains: action.payload,
        loading: false
      };
    case ADD_TRAIN:
      return {
        ...state,
        trains: [action.payload, ...state.trains]
      };
    case DELETE_TRAIN:
      return {
        ...state,
        trains: state.trains.filter(train => train._id !== action.payload)
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
