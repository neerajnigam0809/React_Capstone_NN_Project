// Import the 'useState' hook from React
import { useState } from "react";

// Define the 'Notes' functional component
const Notes = () => {
  // Define state variable 'text' to store and manage the notes content
  const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")));

  // Define a function to handle changes in the textarea input
  const handleChange = (e) => {
    // Update the 'text' state with the current input value
    setText(e.target.value);
    // Store the updated 'text' value in local storage
    window.localStorage.setItem("text", JSON.stringify(text));
  };

  return (
    <div style={{ color: "white", background: "#F1C75B", height: "53.6vh", width: "27.5vw", position: "relative", borderRadius: "12px", padding: "6px" }}>
      {/* Display the title for the notes section */}
      <p style={{ color: "black", fontSize: "2rem", padding: "20px 20px" }}>All notes</p>

      {/* Create a textarea input for entering and editing notes */}
      <textarea
        style={{ width: "26vw", height: "44vh", margin: "auto", border: "none", background: "transparent", marginLeft: "16px", fontSize: "21px", fontFamily: "Roboto", fontWeight: 400 }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

// Export the 'Notes' component as the default export
export default Notes;
