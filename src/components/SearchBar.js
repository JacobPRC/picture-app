import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
    };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.item);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              value={this.state.item}
              placeholder="Search for images"
              onChange={(e) => this.setState({ item: e.target.value })}
            />
            <label>Image Search</label>
          </div>
        </form>
      </div>
    );
  }
}
export { SearchBar };
