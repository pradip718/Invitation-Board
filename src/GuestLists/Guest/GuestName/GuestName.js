import React, { Component } from "react";
import PropTypes from "prop-types";

const GuestName = props => {
  if (props.isEditing) {
    return (
      <input
        type="text"
        value={props.children}
        onChange={props.handleNameEdits}
      />
    );
  } else {
    return <span className="responded">{props.children}</span>;
  }
};

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdits: PropTypes.func.isRequired
};

export default GuestName;
