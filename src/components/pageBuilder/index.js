import React from "react";

class PageBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }
  handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };
  render() {
    return (
      <div className="page-builder">
        <label for="image">
          <input type="file" onChange={this.handleChange} />
          <img src={this.state.file} />
        </label>
      </div>
    );
  }
}

export default PageBuilder;
