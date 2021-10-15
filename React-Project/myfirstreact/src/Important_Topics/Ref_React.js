import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();

    this.cbRef = null;
    this.setCbRef = (element) => {
        this.cbRef = element
    }

  }

  componentDidMount() {
  //  this.inputRef.current.focus();
    if(this.cbRef) {
        this.cbRef.focus()
    }
  }

  handleClick = () => {
    alert(this.cbRef.value)
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Enter Name" ref = {this.inputRef} />
        <input type="text" placeholder="Enter Password" ref = {this.setCbRef} />
        <button onClick = {this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
