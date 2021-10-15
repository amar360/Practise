import React from "react";

const UpdatedComponent = (OrignalComponent) => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    ClickHandler = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    };

    render() {
      return (
        <div>
          <OrignalComponent
            count={this.state.count}
            ClickHandler={this.ClickHandler}
            {... this.props}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
