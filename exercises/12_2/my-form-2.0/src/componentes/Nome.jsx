import React, { Component } from 'react';

class Nome extends Component {
  render() {
    const {nome, callback} = this.props;
    return (
      <label className="field">
        Nome
        <input type="text" name="nome" value={nome} onChange={callback}/>
      </label >
        )
    }
}

export default Nome;