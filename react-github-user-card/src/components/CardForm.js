import React from 'react'
import './CardForm.css'

export default class CardForm extends React.Component {
  render() {
    return (
      <div className="user-input-div">
        <input type="text" value={this.props.username} onChange={this.props.getUsername} />
        <button type="submit" onClick={this.props.fetchUser}>Fetch User</button>
      </div>
    )
  }
}