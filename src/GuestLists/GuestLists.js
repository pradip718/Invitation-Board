import React, { Component } from "react";
import PropTypes from "prop-types";
import Guest from "./Guest/Guest"; //"./Guest";
import PendingGuest from "./PendingGuest";

const GuestList = props => {
  return (
    <ul>
      <PendingGuest name={props.pendingGuests} />

      {props.guests
        .filter(guest => !props.isFiltered || guest.isConfirmed)
        .map((guest, index) => (
          <li className="responded" key={index}>
            <Guest
              name={guest.name}
              isConfirmed={guest.isConfirmed}
              isEditing={guest.isEditing}
              handleConfirmation={() => props.toggleConfirmationAt(index)}
              handleEditing={() => props.toggleEditingAt(index)}
              setName={text => props.changeNameAt(text, index)}
              handleRemove={() => props.removeGuestAt(index)}
            />
          </li>
        ))}
    </ul>
  );
};
GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  changeNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuests: PropTypes.string.isRequired
};

export default GuestList;
