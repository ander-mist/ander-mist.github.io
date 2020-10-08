import React, { Component } from 'react';

class TipoMoradia extends Component {
  render() {
    return (
      <label className="field">Tipo de Moradia
      <label htmlFor="apartamento" >Apartamento
        <input type="radio" name="tipo" id="apartamento" value="apartamento"/>
      </label>
      <label htmlFor="casa" >Casa
        <input type="radio" name="tipo" id="casa" value="casa"/>
      </label>
      </label>
    )
  }
}

export default TipoMoradia;