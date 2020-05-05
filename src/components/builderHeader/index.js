import React from "react";
import "./index.scss";
import API from "../../api";
class BuilderHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "logo-client.png",
    };
  }
  handleChange = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
      };

      API.post(
        "/file/uploadImage",
        {
          file: e.target.result,
        },
        options
      ).then((res) => {
        this.setState({
          file: res.data.imapgePath,
        });
        console.log(res);
      });
    };
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
