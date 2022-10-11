import React, { Component } from "react";
const withImageInput = (OrginalComponent) => {
  class NewInput extends Component {
    state = {
      result: "",
    };

    handleInput = (e) => {
        if (e.target.files && e.target.files[0]) {
          let reader = new FileReader();

          reader.onload = (e) => {
            this.setState({ result: e.target.result });
          };

          reader.readAsDataURL(e.target.files[0]);
        }
    };

    removeImage = () => {
        this.setState({ result: "" });
    };

    render() {
      return (
        <>
          <OrginalComponent
            result={this.state.result}
            handleInput={this.handleInput}
            removeImage={this.removeImage}
          />
        </>
      );
    }
  }

  return NewInput;
};

export default withImageInput;
