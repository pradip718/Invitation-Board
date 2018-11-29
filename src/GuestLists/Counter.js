import React, { Component } from "react";
import PropTypes from "prop-types";

const Counter = props => (
  <table className="counter">
    <tbody>
      <tr>
        <td>Attending:</td>
        <td>{props.numberAttended}</td>
      </tr>
      <tr>
        <td>Unconfirmed:</td>
        <td>{props.numberUnconfirmed}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{props.totalGuest}</td>
      </tr>
    </tbody>
  </table>
);
Counter.propTypes = {
  numberAttended: PropTypes.number,
  numberUnconfirmed: PropTypes.number,
  totalGuest: PropTypes.number
};

export default Counter;
