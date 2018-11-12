import React, { Component } from "react";

import { Button } from "reactstrap";
const Form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <Button color="danger">Get Weather</Button>
    </form>
  </div>
);

export default Form;
