import React from 'react';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { ImageGalleryStyles } from 'components/ImageGallery/ImageGallery.styled';


export class ImageGallery extends React.Component {
  state = {
    imageList: null,
    loading: false,
    error: null
  }
  // console.log({images});
  componentDidUpdate(prevProps, prevState) {
    const URL = `https://pixabay.com/api/?key=25256496-da285e9dc7351a7d44328e376&q=${this.props.imageName}&image_type=photo&orientation=horizontal&page=1&per_page=12`
    if (prevProps.imageName !== this.props.imageName) {
      
      this.setState({ loading: true, imageList: null });
      fetch(URL)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject(
            new Error(`Can't find ${this.props.imageName} images`),
          );
        })
        .then(images => this.setState({ imageList: images.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  
  render() {
    
   return (
      <ImageGalleryStyles>
       {this.state.loading && <h2>Loading...</h2>}
       {this.state.error && <h1> Can't find {this.props.imageName} images </h1>}
       {this.state.imageList && 
         this.state.imageList.map(image => (
        <GalleryItem key={image.id}>
          <GalleryImage src={image.webformatURL} alt="{image.hits.id}" />
           </GalleryItem>))
       }
    </ImageGalleryStyles>
  );
 } 
}
  

