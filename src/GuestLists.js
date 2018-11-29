import React, { Component } from "react";
import PropTypes from "prop-types";
import Guest from "./Guest";

const GuestList = props => {
  return (
    <ul>
      {props.guests.map((guest, index) => (
        <li className="responded" key={index}>
          <Guest
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation={() => props.toggleConfirmationAt(index)}
            handleEditing={() => props.toggleEditingAt(index)}
          />
        </li>
      ))}
    </ul>
  );
};
GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired
};

export default GuestList;
