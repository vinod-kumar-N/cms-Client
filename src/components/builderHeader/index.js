import React from "react";
import "./index.scss";
class BuilderHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "logo-client.png",
    };
  }
  handleChange = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };
  callFileUpload = () => {
    this.inputElement.click();
  };
  render() {
    return (
      <header>
        <div class="leftSection">
          <div className="logo-container" onClick={this.callFileUpload}>
            <img src={this.state.file} alt="logo"></img>
            <input
              className={"file-upload"}
              ref={(input) => (this.inputElement = input)}
              type="file"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div class="rightSection"></div>
      </header>
    );
  }
}

export default BuilderHeader;
