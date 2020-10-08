import React, { Component } from 'react';

class Cpf extends Component {
  render() {
    const { cpf, callback } = this.props;
    return (
      <label className="field">
        CPF
        <input type="number" name="cpf" value={cpf} onChange={callback}/>
      </label>
    ) 
  }
}

export default Cpf;