import React from 'react';
import { NameField } from '../Form/Form';
import { Searchbar } from '../Searchbar/Searchbar';
import { FilterField } from '../Filter/filter';

const LS_KEY = 'added_contacts';
const URL = 'https://pixabay.com/api/?key=25256496-da285e9dc7351a7d44328e376&q=yellow+flowers&image_type=photo';

export class ImageFinder extends React.Component {
  state = {
    imageList: null
  };
  
  
  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(images => this.setState({images}));
  }

  render() {
    return (
          <div>
        <Searchbar />
        {this.state.imageList && (
            <p>Hello Image!</p> )}
          </div>
    );
  }
}
