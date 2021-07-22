import React from 'react';
import ImageGallery from 'react-image-gallery';

import { effectImage } from './info';

const Gallery = () => {
  return (
    <ImageGallery items={effectImage} />
  )
}

export default Gallery;