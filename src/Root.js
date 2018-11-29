import React, { Component } from "react";
import GuestLists from "./GuestLists";

export default class Root extends Component {
  state = {
    guests: [
      {
        name: "Jake",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "alex",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "John",
        isEditing: false,
        isConfirmed: true
      }
    ]
  };

  togglePropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  };

  //For checkbox
  toggleConfirmationAt = index => this.togglePropertyAt("isConfirmed", index);

  //For Editing
  toggleEditingAt = index => this.togglePropertyAt("isEditing", index);

  getTotalInvited = () => this.state.guests.length;
  //getTotalAttending = () => {}
  //  getTotalUnconfirmed = () =>{}

  render() {
    return (
      <div>
        <header>
          <h1>Invitation Board</h1>
          <hr />
          <h3>Simple application to invite Guest...</h3>
          <form>
            <input type="text" placeholder="Invite Guests" />
            <button className="btn btn-primary">Submit</button>
          </form>
        </header>

        <div style={{ marginLeft: "2%", marginTop: "2%" }} className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" />
              Hide those who have not confirmed
            </label>
          </div>

          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>{this.getTotalInvited()}</td>
              </tr>
            </tbody>
          </table>
          <GuestLists
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
          />
        </div>
      </div>
    );
  }
}
