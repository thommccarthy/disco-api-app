import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='search'
            placeholder='type something'
            className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-60'
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
