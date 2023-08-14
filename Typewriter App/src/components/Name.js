import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.typeWriterInterval = null; 
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex + 1)
      };
    });
  };

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.showName) {
      console.log("Component updated true");
      if (!this.typeWriterInterval && this.state.curIndex < this.state.fullName.length) {
        this.typeWriterInterval = setInterval(this.typeWriterEffect, 1000);
      } else if (this.state.curIndex >= this.state.fullName.length) {
        clearInterval(this.typeWriterInterval);
        this.typeWriterInterval = null;
      }
    } 
    else {
      console.log("Component updated false");
      if (this.typeWriterInterval) {
        clearInterval(this.typeWriterInterval);
        this.typeWriterInterval = null;
      }
    }
  }
  

 

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
