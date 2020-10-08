import React, { Component } from 'react';


class Estado extends Component {
  render() {
    const { estado, callback } = this.props;
    return (
      <label className="field">
        Estado
        <select value={estado} onChange={callback}>
          <option value="SP">SP</option>
          <option value="PB">PB</option>
          <option value="RJ">RJ</option>
          <option value="SC">SC</option>
          <option value="MG">MG</option>
        </select>
      </label>
    )
  }
}

export default Estado;