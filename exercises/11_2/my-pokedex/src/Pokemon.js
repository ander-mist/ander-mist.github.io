import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
		const {name, type, value, measurementUnit, image, moreInfo} = this.props;
    return (
      <div className='cardAlign'>
				<ul>
					<li>{name}</li>
					<li>{type}</li>
					<li>{`average Weight: ${value} ${measurementUnit}`}</li>
				</ul>
				<img src={image} alt={moreInfo}/>
			</div>
		);    
  }
}

export default Pokemon;
