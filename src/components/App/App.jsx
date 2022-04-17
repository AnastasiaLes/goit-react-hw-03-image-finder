import React from 'react';
import { Searchbar } from '../Searchbar/Searchbar';

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
