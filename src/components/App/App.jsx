import React from 'react';
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
  }

  handleImageClick = (largeImage, tags) => {
    this.setState({ largeImage, tags, visible: true });
  }

componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
   if ( event.code === 'Escape') {
      this.setState({visible: false})
    }
}


  onModalClose = event => {
    console.log(event.code);
    event.preventDefault();
    if (event.target === event.currentTarget) {
      this.setState({visible: false})
    }
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
