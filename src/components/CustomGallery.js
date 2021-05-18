import React from 'react';
import Gallery from 'react-image-gallery';
import './CustomGallery.css';
import 'react-image-gallery/styles/css/image-gallery.css';

function CustomGallery({images}) {
  const imagesList = images?.map( (image, i) => {
    return {
      original: image,
      thumbnail:image,
    }
  })
  return (
    <div>

      <Gallery items={imagesList} showBullets showPlayButton={false} showThumbnails={true} />
    </div>
  )
}

export default CustomGallery
