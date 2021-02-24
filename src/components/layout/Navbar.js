import React, { Component } from 'react';

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <header className='bg-gold relative w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
          <nav className='f6 fw6 ttu tracked'>
            <ul className='content-end'>
              <li className='f4 link navy dib mr3 tr w-50'>
                <h2>Cratedigr:</h2>
                <h4>a discogs database interface</h4>
              </li>
              <div className=''>
                <a className='f3 link dim navy dib mr2' href='#' title='Home'>
                  Home
                </a>
                <a className='f3 link dim navy dib mr1' href='#' title='About'>
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
