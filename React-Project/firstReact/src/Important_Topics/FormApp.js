import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "male",
      destination : '',
      dietaryRestrictions : {
          isVegan : false,
          isKosher : false,
          isLactoseFree : false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);

  }

  handleChange(event) {
    const { name, value , type , checked} = event.target;

    type === "checkbox" ? 
    this.setState(prevState => {
        return {
            dietaryRestrictions: {
                ...prevState.dietaryRestrictions,
                [name]: checked
            }
        }
    })

    :
    
    this.setState({ [name]: value });

  }

  onSubmitChange(event){

    alert(`First Name  : ${this.state.firstName}
Last Name : ${this.state.lastName}
Age : ${this.state.age}
Gender : ${this.state.gender}
Location : ${this.state.destination}
Dietry restriction : 
    isVegan : ${this.state.dietaryRestrictions.isVegan ? 'Yes' : 'No'}
    isKosher : ${this.state.dietaryRestrictions.isKosher ? 'Yes' : 'No'}
    isLactoseFree : ${this.state.dietaryRestrictions.isLactoseFree ? 'Yes' : 'No'}
    `);
  
}

  render() {
    return (
      <div>
        <main>
          <form onSubmit = {this.onSubmitChange}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              vale={this.state.firstName}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              vale={this.state.lastName}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              placeholder="Age"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <br />

            <label>
              <input type="radio" name="gender" value="male" checked = {this.state.gender === 'male'} onChange = {this.handleChange}/> Male
            </label>

            <br />

            <label>
              <input type="radio" name="gender" value="female" checked = {this.state.gender === 'female'} onChange = {this.handleChange}/> Female
            </label>

            <br />

            <select name = 'destination' value = {this.state.destination} onChange = {this.handleChange}>
            
                <option value = ''>--- Please Select Destination ---</option>
                <option value = 'Lahore'>Lahore</option>
                <option value = 'Islamabad'>Islamabad</option>
                <option value = 'Karachi'>Karachi</option>

            </select>

            <br />

            <label>
            <input 
                type="checkbox"
                name="isVegan"
                onChange={this.handleChange}
                checked={this.state.dietaryRestrictions.isVegan}
            /> Vegan?
        </label>
        <br />
        
        <label>
            <input 
                type="checkbox"
                name="isKosher"
                onChange={this.handleChange}
                checked={this.state.dietaryRestrictions.isKosher}
            /> Kosher?
        </label>
        <br />
        
        <label>
            <input 
                type="checkbox"
                name="isLactoseFree"
                onChange={this.handleChange}
                checked={this.state.dietaryRestrictions.isLactoseFree}
            /> Lactose Free?
        </label>
        <br />
            <button>Submit</button>

          </form>
          <hr />
          <h2>Entered Information</h2>
          <p>
            Your name: {this.state.firstName} {this.state.lastName}
          </p>
          <p>Your age: {this.state.age}</p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>
            Your dietary restrictions:
            isVegan : {this.state.dietaryRestrictions.isVegan ? 'Yes' : 'No'} <br />
            isKosher : {this.state.dietaryRestrictions.isKosher ? 'Yes' : 'No'} <br />
            isLactoseFree : {this.state.dietaryRestrictions.isLactoseFree ? 'Yes' : 'No'}
          </p>
        </main>
      </div>
    );
  }
}

// export default App;
