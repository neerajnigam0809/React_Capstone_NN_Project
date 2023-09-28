// Import the 'Category' component from the specified path
import Category from '../Components/Category/Category';

// Define a functional component called 'Cat'
const Cat = () => {
  return (
    // Use a React fragment (<> ... </>) to avoid unnecessary parent elements
    <>
      {/* Render the 'Category' component */}
      <Category />
    </>
  );
}

// Export the 'Cat' component as the default export
export default Cat;
