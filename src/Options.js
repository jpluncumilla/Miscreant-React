import React, { Component } from 'react';
import './Options.css';
import MLogo from './images/mlogo.jpg';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

class Options extends Component {
  render() {
    return (
      <div className='Options'>
        <Fade top>
          <img className='Options-image' src={MLogo} alt='M-Logo' />
        </Fade>
        <Fade bottom>
          <p className='Options-paragraph'>
            Miscreant Productions, founded in 2016 by professional photographer
            & videographer Gabriel Hernandez is a creative agency of all things
            digital. With services including photography, film, design, audio
            and web development. Miscreant Productions has excelled in execution
            of digital services for artists, events and businesses. Our team
            thrives in a diverse set of skillsets tuned with current trends in
            digital production, while ensuring to keep priority of our clients
            requests.
          </p>
          <div className='Options-links'>
            <Link to='/Work'>
              <h3>Our Work</h3>
            </Link>
            <h3>Contact us:</h3>
            <div className='Options-icons'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='mailto:miscreantproductions@yahoo.com'
              >
                <FiMail />
              </a>{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/mis.cre.ant/'
              >
                <FiInstagram />
              </a>{' '}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://twitter.com/miscreant305'
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </Fade>
        <p className='Options-jp'>
          Powered by:{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://jpluncumilla.me'
          >
            JP Luncumilla
          </a>
        </p>
      </div>
    );
  }
}

export default Options;
