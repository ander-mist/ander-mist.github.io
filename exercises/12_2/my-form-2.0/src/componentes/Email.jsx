import React, { Component } from 'react';

class Email extends Component {
  render() {
    const { email, callback } = this.props;
    return (
      <label className="field">
        E-mail
        <input type="email" name="email" value={email} onChange={callback}/>
      </label>
    )
  }
}

export default Email;