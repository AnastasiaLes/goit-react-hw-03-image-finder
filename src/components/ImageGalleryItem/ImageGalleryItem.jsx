import React from 'react';
import { GalleryItem, GalleryImage } from '../ImageGallery/ImageGallery.styled';
// import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({id, webformatURL, onClick, tag }) => {
  return (
   <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt={tag}
        onClick={onClick}
      />
      {/* <Modal largeImageURL={largeImageURL}/> */}
    </GalleryItem>
  );
};