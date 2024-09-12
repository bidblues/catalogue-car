import React, { useEffect, useState } from 'react';
import './Banner.css';
import img1 from '../../assets/test.jpg'; // Adjusted path
import img2 from '../../assets/test2.jpg'; // Adjusted path
import img3 from '../../assets/test3.jpg'; // Adjusted path
import img4 from '../../assets/test4.jpg'; // Adjusted path


const Banner = () => {
  const images = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        <div
          className="banner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="banner-item"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="banner-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="text-container">
        <h1>Your Text Here</h1>
        <p>Description or additional content.</p>
      </div>
    </div>
  );
};

export default Banner;
