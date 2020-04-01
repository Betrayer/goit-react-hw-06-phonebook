import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import { CSSTransition } from "react-transition-group";
import Alert from "./alert/Alert";
import Filter from "./filter/Filter";
import css from "./app.module.css";

import filterTransition from "./transitions/filterTransition.module.css";
import logoTransition from "./transitions/logoTransition.module.css";
import alertTransition from "./transitions/alertTransition.module.css";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: "",
    alert: false,
    logo: false
  };

  componentDidMount() {
    const contacts =
      localStorage.getItem("contacts") !== null
        ? JSON.parse(localStorage.getItem("contacts"))
        : [];
    this.setState({ contacts, logo: true });
  }

  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  submitContact = data => {
    const isNameExist = this.state.contacts.some(
      contact => contact.name === data.name
    );
    !isNameExist
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data]
        }))
      : this.setState({ alert: true });
    setTimeout(() => this.setState({ alert: false }), 2000);
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  nameFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <>
        <div className={css.titleWrapper}>
          <CSSTransition
            in={this.state.logo}
            timeout={3000}
            classNames={logoTransition}
          >
            <h1 className={css.mainTitle}>Phonebook</h1>
          </CSSTransition>
        </div>
        <div className={css.avocado}>
          <div className={css.formWrapper}>
            <ContactForm submitContact={this.submitContact} />
            <CSSTransition
              in={this.state.contacts.length > 2}
              timeout={1000}
              classNames={filterTransition}
              unmountOnExit
            >
              <Filter nameFilter={this.nameFilter} />
            </CSSTransition>
          </div>
          <ContactList
            contacts={this.getFilteredContacts()}
            deleteContact={this.deleteContact}
          />
          <CSSTransition
            in={this.state.alert}
            timeout={750}
            classNames={alertTransition}
            unmountOnExit
          >
            <div className={css.mainAlertWrapper}>
              <Alert />
            </div>
          </CSSTransition>
        </div>
      </>
    );
  }
}

export default App;
