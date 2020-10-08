import React from 'react';
import './App.css';
import Nome from './componentes/Nome';
import Email from './componentes/Email';
import Cpf from './componentes/Cpf';
import Endereco from './componentes/Endereco';
import Cidade from './componentes/Cidade';
import Estado from './componentes/Estado';
import TipoMoradia from './componentes/TipoMoradia';


class App extends React.Component {

  constructor() {
    super();

    this.getEventOnchange = this.getEventOnchange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipoMoradia: '',
    }

  }

  getEventOnchange({target}) {
    const { name } = target;
    console.log(name);
    const typeOfTag = name === 'tipo'? target.checked: target.value;
    this.setState({
      [name]: typeOfTag,
    })
  }
  render() {
    return (
      <fieldset>
        <Nome nome={this.state.nome} callback={this.getEventOnchange}/>
        <Email email={this.state.email} callback={this.getEventOnchange}/>
        <Cpf cpf={this.state.cpf} callback={this.getEventOnchange}/>
        <Endereco enderco={this.state.endereco} callback={this.getEventOnchange}/>
        <Cidade cidade={this.state.cidade} callback={this.getEventOnchange}/>
        <Estado estado={this.state.estado} callback={this.getEventOnchange}/>
        <TipoMoradia />
      </fieldset>
    );
  }
}

export default App;
