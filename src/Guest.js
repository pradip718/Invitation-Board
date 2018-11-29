import React, { Component } from "react";
import PropTypes from "prop-types";
import GuestName from "./GuestName";

const Guest = props => {
  return (
    <li className="responded">
      <GuestName
        isEditing={props.isEditing}
        handleNameEdits={e => props.setName(e.target.value)}
      >
        {props.name}
      </GuestName>
      <label>
        <input
          type="checkbox"
          checked={props.isConfirmed}
          onChange={props.handleConfirmation}
        />
        Confirmed
      </label>
      <button onClick={props.handleEditing}>
        {props.isEditing ? "Save" : "Edit"}
      </button>
      <button>Delete</button>
    </li>
  );
};

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  changeName: PropTypes.func.isRequired
};
export default Guest;
