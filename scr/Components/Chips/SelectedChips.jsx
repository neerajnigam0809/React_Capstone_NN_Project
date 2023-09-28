// Import necessary modules if not already imported

// Define the 'Chips' functional component that takes props:
const Chips = ({ color, id, setCategories, categories }) => {
    // Define a function to handle the click event when the user wants to remove a chip.
    const handleClick = () => {
      // Find the index of the current 'id' within the 'categories' array.
      const index = categories.indexOf(id);
  
      // Remove the element at that index from the 'categories' array to delete the chip.
      categories.splice(index, 1);
  
      // Update the state of the 'categories' array using 'setCategories'.
      // By spreading the 'categories' array, we trigger a re-render without the removed chip.
      setCategories([...categories]);
    };
  
    return (
      <div style={{ width: "40vw"}}>
        {/* Map through the 'categories' array and generate buttons for each category. */}
        {categories.map((category) => (
          <button
            style={{
              background: `${color}`,
              borderRadius: "12px",
              width: "100px",
              color: "white",
              border: "none",
              padding: "6px",
              height: "30px",
              flexShrink: 0,
              margin: "10px",
            }}
            onClick={handleClick} // Attach the 'handleClick' function to the button's click event.
          >
            {category} <span style={{ color: "black", marginLeft: "4px", cursor:"pointer" }}>X</span>
          </button>
        ))}
      </div>
    );
  };
  
  export default Chips;
  