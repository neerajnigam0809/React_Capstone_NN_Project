// Import components from the specified paths
import Info from '../Components/Info/Info';
import Notes from '../Components/Info/Notes';
import Timer from '../Components/Info/Timer';
import Weather from '../Components/Info/Weather';
import News from '../Components/Info/News';

// Import 'useNavigate' from 'react-router-dom' for navigation
import { useNavigate } from 'react-router-dom';

// Define the 'Information' functional component
const Information = () => {
  // Get the 'navigate' function for programmatic navigation
  const navigate = useNavigate();

  // Function to handle the 'Browse' button click and navigate to '/entertainment'
  const handleClick = () => {
    navigate('/entertainment');
  }

  return (
    <div style={{ height: "100vh", width: "100vw", background: "black", paddingLeft: "6vh", paddingTop: "6vh", boxSizing: "border-box" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Render the 'Info', 'Weather', and 'Timer' components */}
        <div>
          <Info />
          <Weather />
          <Timer />
        </div>
        {/* Render the 'Notes' component */}
        <div>
          <Notes />
        </div>
        {/* Render the 'News' component */}
        <div>
          <News />
        </div>
      </div>
      {/* Render a 'Browse' button with styling */}
      <button style={{ position: "absolute", bottom: "2vh", right: "6vw", background: "green", border: "none", color: "white", padding: "12px 30px", borderRadius: "22px", fontSize: "20px" , cursor:"pointer" }} onClick={handleClick}>Browse</button>
    </div>
  );
}

// Export the 'Information' component as the default export
export default Information;
