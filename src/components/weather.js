import React, { Component } from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {props.city} {props.country}
        </span>
      </p>
    )}
    {props.time && (
      <p className="weather__key">
        Local Time :<span className="weather__value">{props.time}</span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        Temperature:
        <span className="weather__value">{props.temperature} F</span>
      </p>
    )}

    {props.description && (
      <p className="weather__key">
        Condition:
        <span className="weather__value"> {props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__key"> {props.error}</p>}
  </div>
);

export default Weather;
