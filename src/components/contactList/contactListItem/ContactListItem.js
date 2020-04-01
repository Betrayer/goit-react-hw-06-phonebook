import React from "react";
import css from "./contactListItem.module.css";

const ContactListItem = ({ contact: { name, number, id }, deleteContact }) => {
  return (
    <li className={css.contactListItem}>
      <div>
        <span>{name}, </span>
        <span>{number}</span>
      </div>

      <button
        className={css.deleteButt}
        onClick={deleteContact}
        type="button"
        id={id}
      >
        dilit dis
      </button>
    </li>
  );
};

export default ContactListItem;
