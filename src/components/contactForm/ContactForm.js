import React, { Component } from "react";
import { uuid } from "uuidv4";
import css from "./contactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log("this.state.number", this.state.number);
    e.preventDefault();
    const smth = Number(this.state.number);
    if (!Number.isNaN(smth)) {
      this.props.submitContact({
        name: this.state.name,
        number: this.state.number,
        id: uuid()
      });
      this.setState({
        name: "",
        number: ""
      });
    } else {
      alert('I NID NUMBA')
    }
  };

  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <h2 className={css.titleName}>Name</h2>
          <input
            type="text"
            name="name"
            placeholder="имя сюда / yo name here"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <h2 className={css.titleNumber}>Number</h2>
          <input
            type="tel"
            name="number"
            placeholder="номер сюда/type yo numba here"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={this.handleChange}
            value={this.state.number}
          ></input>
          <button className={css.submitButt} type="submit">
            Пойдет, жмакай / slap dat butt
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
