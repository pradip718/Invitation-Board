import React, { Component } from "react";
import GuestLists from "./GuestLists";
import Counter from "./Counter";

export default class Root extends Component {
  state = {
    isFiltered: false,
    pendingGuests: "",
    guests: [
      {
        name: "Jake",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "alex",
        isConfirmed: false,
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

  getAttendingGuest = () => {
    return this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    );
  };

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered });

  changeNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });
  };

  //adding user from input field

  changeNameInput = e => {
    this.setState({ pendingGuests: e.target.value });
  };

  addUser = e => {
    e.preventDefault();

    this.setState({
      guests: [
        {
          name: this.state.pendingGuests,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuests: ""
    });
  };

  removeGuestAt = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1, this.state.guests.length)
      ]
    });
  };

  render() {
    const totalGuest = this.getTotalInvited();
    const numberAttending = this.getAttendingGuest();
    console.log(numberAttending);
    const numberUnconfirmed = totalGuest - numberAttending;
    return (
      <div>
        <header>
          <h1>Invitation Board</h1>
          <hr />
          <h3>Simple application to invite Guest...</h3>
          <form onSubmit={this.addUser}>
            <input
              type="text"
              placeholder="Invite Guests"
              onChange={this.changeNameInput}
              value={this.state.pendingGuests}
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        </header>

        <div style={{ marginLeft: "2%", marginTop: "2%" }} className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              />
              Hide those who have not confirmed
            </label>
          </div>

          <Counter
            numberAttended={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
            totalGuest={totalGuest}
          />
          <GuestLists
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            changeNameAt={this.changeNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuests={this.state.pendingGuests}
          />
        </div>
      </div>
    );
  }
}
