import React, { Component } from 'react';
import './Photography.css';

class Photography extends Component {
  render() {
    return (
      <div>
        <img
          src={require(`./images/img${this.props.id}.jpg`)}
          alt='Photograph'
          className='Photo-img'
        />
      </div>
    );
  }
}

export default Photography;
