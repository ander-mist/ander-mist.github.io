import React, { Component } from 'react';
import './Pokemon';
import Pokemon from './Pokemon';
import './data';
import pokemons from './data';

class Pokedex extends Component {
  render() {
    return (
			<div className='items'>
				{pokemons.map((poke, index) =>{
				return <Pokemon
					key={index}
					name={poke.name}
					type={poke.type}
					value={poke.averageWeight.value}
					measurementUnit={poke.averageWeight.measurementUnit}
					image={poke.image}
					moreInfo={poke.moreInfo}
				/>
			})}	
			</div>
  	);
	}
}

export default Pokedex;