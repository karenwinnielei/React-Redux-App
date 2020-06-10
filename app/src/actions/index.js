import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_COUNTRIES = "UPDATE_COUNTRIES";
export const SET_ERROR = "SET_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://api.covid19api.com/summary")
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_COUNTRIES, payload: res.data.Countries });
    })
    .catch((err) => {
      console.log("error fetching data from api. err:", err);
      dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
    });
};
