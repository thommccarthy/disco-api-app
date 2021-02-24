import React, { Component } from 'react';

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className=''>
        <header className='bg-gold relative w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
          <nav className='navflex f6 fw6 ttu tracked'>
            <div className='w-60'>
              <h1>Cratedigr:</h1>
              <h4>a discogs database interface</h4>
            </div>
            <ul className='mt5 w-40'>
              <div className='navlinks'>
                <a className='f3 link dim navy dib mr3' href='#' title='Home'>
                  Home
                </a>
                <a
                  className='f3 link dim navy dib mr4 mb3'
                  href='#'
                  title='About'
                >
                  About
                </a>
              </div>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
