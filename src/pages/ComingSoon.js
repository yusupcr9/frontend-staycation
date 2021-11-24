import React, { Component } from "react";
import Button from "elements/Button";

export default class ComingSoon extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="col-3">
            Coming Soon :)
            <div>
              <Button className="btn mt-5" type="link" href="/" isLight>
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
