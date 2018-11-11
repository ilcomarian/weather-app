import React, { Component } from "react";
import Convert from "./convert";
import { Button } from "reactstrap";
const Form = props => (
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <Button color="danger">Get Weather</Button>
      <Button>
        <Convert />
      </Button>
    </form>
  </div>
);

export default Form;
