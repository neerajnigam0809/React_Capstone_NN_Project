// Import React and the CSS file for the 'ImageSection' component
import React from 'react';
import './ImageSection.css';

// Import the background image from the specified path
import BackgroundImage from '../../Pictures/left-img.png';

// Define the 'ImageSection' functional component
const ImageSection = () => {
  return (
    <>
      {/* Create a div with a class name 'bottom' for styling */}
      <div className="bottom">
        <p>Discover new things on SuperApp</p>
      </div>
      {/* Render the background image using the imported image */}
      <img src={BackgroundImage} alt="OOPS!! IMG NOT FOUND" />
    </>
  );
}

// Export the 'ImageSection' component as the default export
export default ImageSection;
