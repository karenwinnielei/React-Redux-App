import React from "react";
import { connect } from "react-redux";

const CovidList = (props) => {
  console.log(props.countries);

  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.countries.map((country) => (
          <div>
            <h3>Country: {country.Country}</h3>
            <p>New Confirmed Cases: {country.NewConfirmed}</p>
            <p>Total Confirmed Cases: {country.TotalConfirmed}</p>
            <p>New Deaths: {country.NewDeaths}</p>
            <p>Total Deaths: {country.TotalDeaths}</p>
            <p>New Recovered: {country.NewRecovered}</p>
            <p>Total Recovered: {country.TotalRecovered}</p>
          </div>
        ))
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.countries);
  return {
    countries: state.countries,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(CovidList);
