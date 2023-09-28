// Import the 'Profile' image from the specified path
import Profile from '../../Pictures/profileBig.png';

// Define the 'Info' functional component
const Info = () => {
  // Retrieve user information and categories from local storage
  const info = JSON.parse(window.localStorage.getItem("userDetails"));
  const categories = JSON.parse(window.localStorage.getItem("genres"));

  return (
    <div style={{ width: "30vw", height: "16vw", background: '#5746EA', borderRadius: "12px", padding: "6px", display: "flex", gap: "12px" }}>
      <div >
        {/* Render the 'Profile' image */}
        <img src={Profile} style={{ height: "280px", width: "10vw", position: "relative", top: "2vh", marginLeft: "20px" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Render user information */}
        <p style={{ color: 'white', fontSize: "2rem", marginTop: "20px" }}>{info.name}</p>
        <p style={{ color: 'white', fontSize: "2rem", marginTop: "5px" }}>{info.email}</p>
        <p style={{ color: 'white', fontSize: "3rem", marginTop: "5px" }}>{info.username}</p>
        
        {/* Render the 'Chips' component to display categories */}
        <Chips categories={categories} color={"#9F94FF"} />
      </div>
    </div>
  );
}

// Define the 'Chips' functional component
const Chips = ({ color, categories }) => {
  return (
    <div style={{ width: "15vw" }}>
      {/* Map through categories and render each as a button */}
      {categories.map((category) => (
        <button style={{ background: `${color}`, borderRadius: "12px", width: "100px", color: "white", border: "none", padding: "6px", height: "30px", flexShrink: 0, margin: "10px" }}>
          {category}  <span style={{ color: "black", marginLeft: "4px" }}>X</span>
        </button>
      ))}
    </div>
  );
}

// Export the 'Info' component as the default export
export default Info;
