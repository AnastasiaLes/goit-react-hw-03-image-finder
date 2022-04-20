import React from 'react';
// import { toast } from 'react-toastify';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import { Modal } from 'components/Modal/Modal';
import { AppContainer } from './App.styled';

export class App extends React.Component {
  state = {
    page: 1,
    imageName: '',
    largeImage: '',
    tags: '',
    imageList: [],
    visible: false
  };
  
  handleFormSubmit = (imageName, imageList) => {
    this.setState({ imageName, imageList })
    //  this.setState({ page: 1, imageName, imageList: [] })
  }

  handleImageClick = (largeImage, tags) => {
    // console.log(largeImage);
    // console.log('Yes');
    this.setState({ largeImage, tags, visible: true });
    // console.log(this.state.largeImage)
  }

  onModalClose = event => {
    // event.preventDefsult();
    if (event.target === event.currentTarget) {
      this.setState({visible: false})
    }
    // console.log(this.state.largeImage);
  }

    render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          page={this.state.page}
          imageName={this.state.imageName}
          imageList={this.state.imageList}
          onImageClick={this.handleImageClick} />
        
        {this.state.visible && 
          <Modal
          onClose={this.onModalClose}
          LargeImage={this.state.largeImage}
          tags={this.state.tags}/>
        }
        
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
