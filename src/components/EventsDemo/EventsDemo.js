import ImageThumbnail from './ImageThumbnail';
import images from '../../data/images';
import './EventsDemo.css';

const EventsDemo = () => {
  return (
    <div className="EventsDemo">
      <div className="images">
        {images.map((image, index) => (
          <ImageThumbnail
            key={index}
            url={image.url}
            description={image.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsDemo;
