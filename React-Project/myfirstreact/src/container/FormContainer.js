import React from "react";
import FormComponent from "../componenets/FormComponent";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "male",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
          };
        })
      : this.setState({ [name]: value });
  }

  onSubmitChange(event) {
    alert(`First Name  : ${this.state.firstName}
  Last Name : ${this.state.lastName}
  Age : ${this.state.age}
  Gender : ${this.state.gender}
  Location : ${this.state.destination}
  Dietry restriction : 
      isVegan : ${this.state.dietaryRestrictions.isVegan ? "Yes" : "No"}
      isKosher : ${this.state.dietaryRestrictions.isKosher ? "Yes" : "No"}
      isLactoseFree : ${
        this.state.dietaryRestrictions.isLactoseFree ? "Yes" : "No"
      }
      `);
  }

  render() {
    return (
      <div>
        <FormComponent
          handleChange={this.handleChange}
          onSubmitChange={this.onSubmitChange}
          {...this.state}
        />
      </div>
    );
  }
}

export default Form;
