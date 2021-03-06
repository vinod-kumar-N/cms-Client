import React from "react";
import "./index.scss";
import API from "../../api";
import Sketch from "../builderHeader/colorPicker";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
class BuilderHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "logo-client.png",
      displayColorPicker: false,
      color: {
        r: "52",
        g: "73",
        b: "94",
        a: "1",
      },
      headerSection: {
        r: "52",
        g: "73",
        b: "94",
        a: "1",
      },
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
      )
        .then((res) => {
          this.setState({
            file: res.data.imapgePath,
          });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  callFileUpload = () => {
    this.inputElement.click();
  };
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };
  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "1000px",
          height: "30px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          // padding: "5px",
          //background: "#fff",
          //borderRadius: "1px",
          //boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          //display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
        headerSection: {
          height: "40px",
          display: "flex",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
      },
    });

    return (
      <header style={styles.headerSection}>
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
        <div class="rightSection">
          <div>
            <div style={styles.swatch} onClick={this.handleClick}>
              <div style={styles.color} />
            </div>
            {this.state.displayColorPicker ? (
              <div style={styles.popover}>
                <div style={styles.cover} onClick={this.handleClose} />
                <SketchPicker
                  color={this.state.color}
                  onChange={this.handleChange}
                />
              </div>
            ) : null}
          </div>
        </div>
      </header>
    );
  }
}

export default BuilderHeader;
