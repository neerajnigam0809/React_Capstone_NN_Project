import { useEffect, useState } from "react";
import styles from './Movies.module.css';

// Define a functional component 'List' that takes a 'genre' prop
const List = ({ genre }) => {
  // Define state variable 'movies' to store the list of movies
  const [movies, setMovies] = useState([]);

  // Fetch movies data based on the provided 'genre'
  useEffect(() => {
    // Define request options including API key and host
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd8bb0aa01dmshad050a25d0a0925p112f4fjsn09e6db865193',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    // Define a function to fetch movies data
    const fetchMovies = async () => {
      await fetch(`https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2020`, options)
        .then(response => response.json())
        .then(response => setMovies(response.results.splice(4, 4))) // Limit the number of displayed movies
        .catch(err => console.error(err));
    };

    // Call the fetchMovies function when the component mounts
    fetchMovies();
  }, [genre]); // Run the effect when 'genre' prop changes

  return (
    <>
      {/* Display the genre as a heading */}
      <p className={styles.heading}>{genre}</p>
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
        {/* Map through the 'movies' array and display each movie */}
        {movies.map((movie, idx) => {
          return (
            <div key={idx} style={{ width: "20vw", margin: "0vw", marginRight: "0vw" }}>
              {/* Display movie image with specified styling */}
              <img src={movie?.primaryImage?.url} style={{ objectFit: "cover", width: "16vw", height: "16vh", borderRadius: "12px" }} />
            </div>
          );
        })}
      </div>
    </>
  );
}

// Export the 'List' component as the default export
export default List;
