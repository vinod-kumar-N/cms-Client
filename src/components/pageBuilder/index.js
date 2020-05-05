import React from "react";
import API from "../../api";

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

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      console.log(event.target.result);
      const options = {
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
      };

      API.post(
        "/file/uploadImage",
        {
          file: event.target.result,
        },
        options
      ).then((res) => {
        console.log(res.imapgePath);
        this.setState({
          file: res.data.imapgePath,
        });
        console.log(res);
      });
    };
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
