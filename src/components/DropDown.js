import React, { Component } from "react";

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentDidMount() {
    // We fake a list of objects used to make the list of selectable items
    // This list can be retrived from a backend by using a Fetch call
    // Here we just set the state with a array of objects
    this.setState({
      list: [
        { id: 1, name: "List Item 1" },
        { id: 2, name: "List Item 2" },
        { id: 3, name: "List Item 3" },
        { id: 4, name: "List Item 4" }
      ]
    });
  }
  render() {
    return (
      <ul>
        {/** The following code checks to see if the list is there or not. Second line do a foreach statement */}
        {this.state.list !== undefined ? (
          this.state.list.map(item => (
            <li>
              <a
                href=""
                onClick={event => {
                  this.props.onSelect(item.id);
                  event.preventDefault();
                }}
              >
                {item.name}
              </a>
            </li>
          ))
        ) : (
          <>Loading...</>
        )}
      </ul>
    );
  }
}
