import React, {Component} from 'react';

import './Hero.css'

export default class Hero extends Component{
  render() {
    return (
      <div className='hero'>
        <div className='hero-descritor'>
          <button>
            <svg className="material-icon" viewBox="0 0 24 24"> <path d="M8 5v14l11-7z"/></svg> 
            Watch Now
          </button>
          <p>Cillum ad incididunt aliquip proident voluptate. Culpa laboris sunt Lorem tempor id. Proident magna sunt et magna ipsum irure ad nulla nisi irure nisi.</p>

          <h3>Nisi anim laborum dolore irure excepteur ut do elit.</h3>
        </div>
      </div>
    )

  }
}