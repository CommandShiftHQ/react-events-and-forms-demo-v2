import React, { useState } from 'react';
import './ImageThumbnail.css';

const ImageThumbnail = ({ url, description }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="image-thumbnail"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => setIsSelected(!isSelected)}
    >
      <img src={url} className="image-thumbnail__image" alt={description} />
      {isSelected && (
        <div className="image-thumbnail__selected-tag">Selected</div>
      )}
      {isHovered && <div className="image-thumbnail__title">{description}</div>}
    </div>
  );
};

export default ImageThumbnail;
