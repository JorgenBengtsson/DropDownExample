import React, { Component } from "react";

export default class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" }; // Initial state, keeping track of the email (not used in this example but ... :)
  }
  makeSubmit = () => {
    // Post data to backend (not implemented in this example)
    this.props.onSubmit(); // Tell the parent (App Component) that we made a submit, use a function sent in a prop
  };
  handleOnChange = event => {
    // Function handles when the email textbox value change, we save it in the state so we can use it later
    this.setState({ email: event.target.value });
  };
  render() {
    return (
      <div>
        Selected ID: {this.props.selectedId}
        {/** Display the selected id sent through a prop to the component */}
        <br />
        Email:
        <input value={this.state.email} onChange={this.handleOnChange} />
        <br />
        <button onClick={this.makeSubmit}>Submit</button>
      </div>
    );
  }
}
