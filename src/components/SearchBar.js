import React from "react";

class SearchBar extends React.Component {
  // initialize state
  state = { term: "" };

  onInputChange = event => {
    // set the state 'term' property to the search query
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    // prevent page refresh on form submit
    event.preventDefault();
    // call the onFormSubmit function with the current search term
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui raised segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-search">Video Search</label>
            <input
              id="video-search"
              type="text"
              value={this.state.term}
              placeholder="enter search query"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
