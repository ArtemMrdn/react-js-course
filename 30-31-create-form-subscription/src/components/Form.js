import React from "react";

class Form extends React.Component {
  state = {
    email: "",
    isAgreeWithTerms: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = (event) => {
    this.setState({ isAgreeWithTerms: event.target.checked });
  };

  validateEmail = (email) => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email
      )
    ) {
      alert("email invalid");
      return;
    }

    if (!this.state.isAgreeWithTerms) {
      alert("You should accept all term and condition");
      return;
    }

    this.setState({
      email: "",
      isAgreeWithTerms: false,
    });
    alert("Thank you for subscription!");
  };

  render() {
    const { email, isAgreeWithTerms } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isAgreeWithTerms"
            checked={isAgreeWithTerms}
            onChange={this.handleCheckboxChange}
          />{" "}
          I agree with terms and condition
        </label>
        <br />
        <button onClick={this.validateEmail}>Send</button>
      </div>
    );
  }
}

export default Form;
