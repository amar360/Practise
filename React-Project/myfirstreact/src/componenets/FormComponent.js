import React from "react";

function FormComponent(props) {
  return (
    <div>
      <main>
        <form onSubmit={props.onSubmitChange}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            vale={props.firstName}
            onChange={props.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            vale={props.lastName}
            onChange={props.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={props.age}
            onChange={props.handleChange}
          />
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={props.gender === "male"}
              onChange={props.handleChange}
            />{" "}
            Male
          </label>

          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={props.gender === "female"}
              onChange={props.handleChange}
            />{" "}
            Female
          </label>

          <br />

          <select
            name="destination"
            value={props.destination}
            onChange={props.handleChange}
          >
            <option value="">--- Please Select Destination ---</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Karachi">Karachi</option>
          </select>

          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={props.handleChange}
              checked={props.dietaryRestrictions.isVegan}
            />{" "}
            Vegan?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={props.handleChange}
              checked={props.dietaryRestrictions.isKosher}
            />{" "}
            Kosher?
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={props.handleChange}
              checked={props.dietaryRestrictions.isLactoseFree}
            />{" "}
            Lactose Free?
          </label>
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered Information</h2>
        <p>
          Your name: {props.firstName} {props.lastName}
        </p>
        <p>Your age: {props.age}</p>
        <p>Your gender: {props.gender}</p>
        <p>Your destination: {props.destination}</p>
        <p>
          Your dietary restrictions: isVegan :
          {props.dietaryRestrictions.isVegan ? "Yes" : "No"} 
          <br />
          isKosher : {props.dietaryRestrictions.isKosher ? "Yes" : "No"}
          <br />
          isLactoseFree : {props.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}
        </p>
      </main>
    </div>
  );
}

export default FormComponent;
