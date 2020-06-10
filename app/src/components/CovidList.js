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
            {country.Country}:{country.TotalConfirmed}
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
