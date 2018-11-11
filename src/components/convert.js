import React, { Component } from "react";
class Convert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let count = () => <h1>"C"</h1>;
    //  {
    //   //   let c = 0;
    //   //   if (c === "C") {
    //   //     c = 1
    //   //     return "C";
    //   //   } else {
    //   //     c = 1;
    //   //     return "F";
    //   //   }
    //   "C";
    // };
    return (
      <div>
        <h1>{this.count}</h1>
      </div>
    );
  }
}

export default Convert;
