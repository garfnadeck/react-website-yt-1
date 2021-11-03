import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          join the adventure newsletter to receive our best
        </p>
        <p className='footer-subscription-text'>
          you can unsubscribe at any time
        </p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='Your email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>about us</h2>
            <Link to='/sign-up'>How it Works</Link>
            <Link to='/'>testimonials</Link>
            <Link to='/'>careers</Link>
            <Link to='/'>investors</Link>
            <Link to='/'>term of service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>about us</h2>
            <Link to='/sign-up'>How it Works</Link>
            <Link to='/'>testimonials</Link>
            <Link to='/'>careers</Link>
            <Link to='/'>investors</Link>
            <Link to='/'>term of service</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>about us</h2>
            <Link to='/sign-up'>How it Works</Link>
            <Link to='/'>testimonials</Link>
            <Link to='/'>careers</Link>
            <Link to='/'>investors</Link>
            <Link to='/'>term of service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>about us</h2>
            <Link to='/sign-up'>How it Works</Link>
            <Link to='/'>testimonials</Link>
            <Link to='/'>careers</Link>
            <Link to='/'>investors</Link>
            <Link to='/'>term of service</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              amazonia4ever <i className='fab fa-typo3'></i>
            </Link>
          </div>
          <smal className='websire-rights'>amazonia4ever @ 2021</smal>
          <div className='social-icons'>
            <Link className='social-icon-link facebook' to='/' target='_blank'>
              <i className='fab fa-facebook'></i>
            </Link>
            <Link className='social-icon-link twitter' to='/' target='_blank'>
              <i className='fab fa-twitter'></i>
            </Link>
            <Link className='social-icon-link instagram' to='/' target='_blank'>
              <i className='fab fa-instagram'></i>
            </Link>
            <Link className='social-icon-link youtube' to='/' target='_blank'>
              <i className='fab fa-youtube'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
