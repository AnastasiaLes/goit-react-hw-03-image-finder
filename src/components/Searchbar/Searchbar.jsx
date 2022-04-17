import React from 'react';
import {SearchbarStyles } from './Searchbar.styled';


export class Searchbar extends React.Component {
  state = {
    
  };

  render() {
    return (
      <SearchbarStyles class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</SearchbarStyles>
    );
  }
}