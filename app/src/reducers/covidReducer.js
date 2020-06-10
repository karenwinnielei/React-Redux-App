import { FETCH_DATA, UPDATE_COUNTRIES, SET_ERROR } from "../actions";

const initialState = {
  countries: [],
  isFetchingData: false,
  error: "",
};

export const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        countries: [],
      };
    case UPDATE_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
