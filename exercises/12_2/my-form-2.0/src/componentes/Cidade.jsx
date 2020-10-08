import React, { Component } from 'react';

class Cidade extends Component {
  render() {
    const { cidade, callback } = this.props;
    return (
      <label className="field">
        Cidade
        <input type="text" name="cidade" value={cidade} onChange={callback}/>
      </label>
    )
  }
}

export default Cidade;