import React, { Component } from "react";
import PropTypes from "prop-types";
import GuestName from "./GuestName";

const Guest = props => {
  return (
    <li className="responded">
      <GuestName isEditing={props.isEditing}>{props.name}</GuestName>
      <label>
        <input
          type="checkbox"
          checked={props.isConfirmed}
          onChange={props.handleConfirmation}
        />
        Confirmed
      </label>
      <button onClick={props.handleEditing}>edit</button>
      <button>Delete</button>
    </li>
  );
};

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired
};
export default Guest;
