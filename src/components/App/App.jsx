import React from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGalleryItem/ImageGalleryItem';
import { ToastContainer } from 'react-toastify';

// const URL = 'https://pixabay.com/api/?key=25256496-da285e9dc7351a7d44328e376&q=cat';

export class App extends React.Component {
  state = {
    // imageList: null,
    imageName: ''
  };
  
  handleFormSubmit = imageName => {
    this.setState({imageName})
  }

    render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}/>
        
        <ImageGallery
            imageName={this.state.imageName}
             />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
