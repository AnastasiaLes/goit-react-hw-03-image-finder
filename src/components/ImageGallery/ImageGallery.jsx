import React from 'react';
import { Spiner } from 'components/Loader/Loader';
import { LoadMoreButton } from 'components/Button/Button';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { ImageGalleryStyles } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export class ImageGallery extends React.Component {
  state = {
    imageList: this.props.imageList,
    page: 1,
    error: null,
    status: 'idle'
  }

//   getImages = () => {
//     const URL = `https://pixabay.com/api/?key=25256496-da285e9dc7351a7d44328e376&q=${this.props.imageName}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`
    
//     this.setState({ status: 'pending' });
//       setTimeout(() => {
//         fetch(URL)
//           .then(response => {
//             if (response.ok) {
//               return response.json()
//             }
//             return Promise.reject(
//               new Error(`Can't find ${this.props.imageName} images`),
//             );
//           })
//           .then(images => this.setState(prevState =>
//           ({
//             imageList: [...prevState.imageList, ...images.hits],
//             // page: prevState.page + 1,
//             status: 'resolved'
//           })))
//           .catch(error => this.setState({ error, status: 'rejected' }));
//       }, 1000);
// }

  
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.imageName !== this.props.imageName || prevState.page !== this.state.page) {
  //     this.getImages()
  //   }
  // }

  getNextImages() {
          const URL = `https://pixabay.com/api/?key=25256496-da285e9dc7351a7d44328e376&q=${this.props.imageName}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`
    
    this.setState({ status: 'pending' });
   fetch(URL)
          .then(response => {
            if (response.ok) {
              return response.json()
            }
            return Promise.reject(
              new Error(`Can't find ${this.props.imageName} images`),
            );
          })
          .then(images => this.setState(prevState =>
          ({
            imageList: [...prevState.imageList, ...images.hits],
            // page: prevState.page + 1,
            status: 'resolved'
          })))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }
     
  fetchImg() {
  
}
  
getNewImages() {
          const URL = `https://pixabay.com/api/?key=25256496-da285e9dc7351a7d44328e376&q=${this.props.imageName}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`
    
    this.setState({ status: 'pending' });
      fetch(URL)
          .then(response => {
            if (response.ok) {
              return response.json()
            }
            return Promise.reject(
              new Error(`Can't find ${this.props.imageName} images`),
            );
          })
          .then(images => this.setState(prevState =>
          ({
            imageList: [...images.hits],
            // page: prevState.page + 1,
            status: 'resolved'
          })))
          .catch(error => this.setState({ error, status: 'rejected' }));
      }

   componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.getNewImages()
    } else if (prevState.page !== this.state.page) {
      this.getNextImages() 
    }
   }
  

  handleLoadMore = (event) => {
    event.preventDefault();
    this.setState(prevState => ({ page: prevState.page + 1 }));
    // console.log('Click!');
  }

  render() {
    if (this.state.status === 'idle') {
      return <h2>Please, enter what you are looking for...</h2>
    }
    if (this.state.status === 'pending') {
      return <Spiner />
    }
    if (this.state.status === 'rejected') {
      return <h1> {this.state.error.message} </h1>
    }
    if (this.state.status === 'resolved') {
      return (
        <div>
          <ImageGalleryStyles>
          {this.state.imageList.map(image =>
          (
            <ImageGalleryItem
              key={image.id.toString()}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              tag={image.tags}
              onClick={() => this.props.onImageClick(image.largeImageURL, image.tags)} />
            ))}
          
        </ImageGalleryStyles>
        <LoadMoreButton onClick={this.handleLoadMore} />
        </div>
      );
    }
 } 
}
  

