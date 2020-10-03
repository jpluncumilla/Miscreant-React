import React, { Component } from 'react';
import './Work.css';
import Fade from 'react-reveal/Fade';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MLogo from './images/mlogo.jpg';
import Photography from './Photography';

class Work extends Component {
  static defaultProps = {
    photos: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
    ],
  };

  render() {
    return (
      <div className='Work'>
        <img className='Work-image' src={MLogo} alt='M-Logo' />

        <Fade bottom>
          <Link to='/About'>
            <div className='Work-icon'>
              <FiHome /> Home
            </div>
          </Link>

          <h3 className='Work-videos-title'>Video</h3>
          <div className='Work-videos'>
            <iframe
              title='vid1'
              width='403.2'
              height='226.8'
              src='https://www.youtube.com/embed/ypXEemTWl5E'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <iframe
              title='vid2'
              width='403.2'
              height='226.8'
              src='https://www.youtube.com/embed/K1d_RpYtzRk'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <iframe
              title='vid3'
              width='403.2'
              height='226.8'
              src='https://www.youtube.com/embed/w-z52XYVCRg'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>

            <iframe
              title='vid4'
              width='403.2'
              height='226.8'
              src='https://www.youtube.com/embed/bPNweUXo87Y'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>

            <iframe
              title='vid5'
              width='403.2'
              height='226.8'
              src='https://www.youtube.com/embed/O8x6Prv4gVk'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>

            <iframe
              title='vid6'
              width='403.2'
              height='226.8'
              src='https://www.youtube.com/embed/FAR4e3jILxg'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <h3 className='Work-photography-title'>Photography</h3>
        </Fade>
        <div className='Work-photography'>
          {this.props.photos.map((p) => (
            <Photography id={p.id} />
          ))}
        </div>

        <p className='Work-jp'>
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

export default Work;
