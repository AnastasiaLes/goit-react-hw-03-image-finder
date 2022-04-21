import React from 'react';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import { Modal } from 'components/Modal/Modal';
import { AppContainer } from './App.styled';
import { fetchImages } from 'components/Services/api';
import { LoadMoreButton } from 'components/Button/Button';
import * as Scroll from 'react-scroll';

const scroll = Scroll.animateScroll;


export class App extends React.Component {
  state = {
    page: 1,
    imageName: '',
    largeImage: '',
    tags: '',
    imageList: [],
    visible: false,
    status: 'idle'
  };
  
  componentDidUpdate(_, prevState) {
    if (prevState.imageName !== this.state.imageName || prevState.page !== this.state.page) {
      this.getImages()
      // console.log(prevState.imageName);
    } 
  }
  
  handleFormSubmit = (imageName) => {
      this.setState({ imageName, imageList: [], page: 1 })
  }
  
  getImages() {
    this.setState({ status: 'pending' });
          fetchImages(this.state.imageName, this.state.page)
            .then(images => 
              this.setState(prevState =>
          ({
            imageList: [...prevState.imageList, ...images.hits],
            status: 'resolved'
              })
              )
            )
          .catch(error => this.setState({ error, status: 'rejected' }));
      }

   handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    scroll.scrollToBottom();
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
          status={this.state.status}
          imageList={this.state.imageList}
          onImageClick={this.handleImageClick} />
        
        {this.state.visible && 
          <Modal
          onClose={this.onModalClose}
          LargeImage={this.state.largeImage}
          tags={this.state.tags}/>
        }

        { this.state.imageList.length > 0 &&
          <LoadMoreButton onClick={this.handleLoadMore} />
        }
        
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
