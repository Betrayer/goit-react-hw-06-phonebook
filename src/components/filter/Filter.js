import React from "react";
import css from "./filter.module.css";

const Filter = ({ nameFilter }) => (
  <div>
    <h2 className={css.filterTitle}>Find contact by name</h2>
    <input type="text" onChange={nameFilter} />
  </div>
);

export default Filter;
