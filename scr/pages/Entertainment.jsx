// Import the 'List' component from the specified path
import List from "../Components/Entertainment/Movies";

// Import the 'Profile' image
import Profile from '../Pictures/profileSmall.png';

// Import 'useNavigate' from 'react-router-dom' for navigation
import { useNavigate } from 'react-router-dom';

// Define the 'Movies' functional component
const Movies = () => {
  // Get genres data from local storage
  const movies = JSON.parse(window.localStorage.getItem("genres"));

  // Get the 'navigate' function for programmatic navigation
  const navigate = useNavigate();

  // Function to handle the 'Browse' button click and navigate to '/categories'
  const handleClick = () => {
    navigate('/categories');
  }

  return (
    <>
      {/* Render the 'Profile' image */}
      <img src={Profile} style={{ position: "absolute", top: "2vh", right: "3vw", height: "60px", width: "60px" }} />

      {/* Create a container div with styling */}
      <div style={{ width: "100vw", minHeight: "100vh", background: "black", overflowX: "hidden" }}>
        {/* Render a heading */}
        <p style={{ color: "green", fontSize: "3rem", margin: "1vw", fontWeight: "400px", fontFamily: 'Single Day' }}>Super app</p>

        {/* Render a description */}
        <p style={{ color: "white", fontSize: "2rem", margin: "3vw" }}>Entertainment according to your choice</p>

        {/* Map through 'movies' and render the 'List' component for each genre */}
        {movies.map((movie) => <List genre={movie} />)}
      </div>

      {/* Render a 'Browse' button with styling */}
      <button style={{ position: "fixed", bottom: "2vh", right: "6vw", background: "green", border: "none", color: "white", padding: "12px 30px", borderRadius: "22px", fontSize: "20px", cursor:"pointer" }} onClick={handleClick}>Browse</button>
    </>
  );
}

// Export the 'Movies' component as the default export
export default Movies;
