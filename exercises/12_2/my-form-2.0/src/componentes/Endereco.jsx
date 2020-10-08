import React, { Component } from 'react';

class Endereco extends Component {
  render() {
    const { endereco, callback } = this.props;
    return (
      <label className="field">
        Endereco
        <input type="text" name="endereco" value={endereco} onChange={callback}/>
      </label>
    )
  }
}

export default Endereco;