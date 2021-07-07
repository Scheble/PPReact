import React from "react";
import { connect } from "react-redux";
import { increseSize } from "../actions";
import Divider from "@civicplus/preamble/lib/Divider";
import InputLabel from "@civicplus/preamble/lib/InputLabel";
import Titlebar from "@civicplus/preamble/lib/Titlebar";
import Button from "@civicplus/preamble/lib/Button";

const App = ({ textSize, increseSize }) => {
  return (
    <div testid="root">
      <Titlebar
        id="demo-titlebar"
        title="Running with React-Redux on a Single-spa app"
        description="Preamble is up and running"
        buttons={[
          <Button key="1" id="demo-button1" onClick={increseSize}>
            Give me more Yei!
          </Button>,
        ]}
      />
      <Divider />
      <br />
      <InputLabel style={{ fontSize: textSize }}>Yei!</InputLabel>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    textSize: state.textSize,
  };
};

export default connect(mapStateToProps, {
  increseSize,
})(App);
