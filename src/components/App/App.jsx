import React from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import { Modal } from 'components/Modal/Modal';

export class App extends React.Component {
  state = {
    page: 1,
    imageName: '',
    largeImage: '',
    tags: '',
    visible: false
  };
  
  handleFormSubmit = imageName => {
    this.setState({imageName})
  }

  handleImageClick = (largeImage, tags) => {
    console.log(largeImage);
    console.log('Yes');
    this.setState({ largeImage, tags, visible: true });
    console.log(this.state.largeImage)
  }

    render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          imageName={this.state.imageName}
          onImageClick={this.handleImageClick} />
        
        {this.state.visible && 
        <Modal LargeImage={this.state.largeImage}
          tags={this.state.tags}/>
        }
        
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
