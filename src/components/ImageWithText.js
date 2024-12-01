import React from 'react';

const ImageWithText = ({ src, alt, text }) => {
  return (
    <div className="image-with-text">
      <img src={src} alt={alt} className="img-fluid" />
      <p>{text}</p>
    </div>
  );
}

export default ImageWithText;

