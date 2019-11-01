import React from "react";

import DropDown from "./components/DropDown";
import SubmitForm from "./components/SubmitForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = { selectedItem: null, display: "select" }; // Initial state, display is used in the switch case statement below
  }
  onSubmit = () => {
    // When the form makes a submit, this function is called and we change what is displayed
    this.setState({ display: "select" });
  };
  handleDropDownSelect = id => {
    // Handle when a dropdown item is selected, the id is sent to this function in it's argument
    // Update the state with the id and set the display value to "form" (user in the switch statement in render)
    this.setState({ selectedItem: id, display: "form" });
  };
  render() {
    switch (this.state.display) {
      case "select":
        return <DropDown onSelect={this.handleDropDownSelect} />;
      case "form":
        return (
          <SubmitForm
            selectedId={this.state.selectedItem}
            onSubmit={this.onSubmit}
          />
        );
    }
  }
}

export default App;
