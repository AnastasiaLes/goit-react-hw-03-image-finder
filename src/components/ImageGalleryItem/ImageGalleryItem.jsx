import React from 'react';
import { GalleryItem, GalleryImage } from '../ImageGallery/ImageGallery.styled';


export const ImageGalleryItem = ({id, webformatURL }) => {
  return (
   <GalleryItem key={id}>
      <GalleryImage
        key={id}
        src={webformatURL}
        alt="{image.hits.id}"
        // onClick={this.handleImageClick}
      />
            </GalleryItem>
  );
};
