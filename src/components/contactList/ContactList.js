import React from "react";
import ContactListItem from "./contactListItem/ContactListItem";
import css from "./contactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import listItemTransition from "../transitions/listItemTransitons.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <div className={css.contactListWrapper}>
    <h2 className={css.noice}>Contacts</h2>
    <TransitionGroup component="ul" className={css.contactList}>
      {contacts.map(contact => (
        <CSSTransition
          in={true}
          key={contact.id}
          timeout={1000}
          classNames={listItemTransition}
          unmountOnExit
        >
          <ContactListItem
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

export default ContactList;
