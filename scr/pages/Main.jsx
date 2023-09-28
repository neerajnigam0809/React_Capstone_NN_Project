// Import the 'ImageSection' and 'FormSection' components from the specified paths
import ImageSection from '../Components/Main/ImageSection';
import FormSection from '../Components/Main/FormSection';

// Define the 'Main' functional component
const Main = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Render the 'ImageSection' component */}
      <ImageSection />
      {/* Render the 'FormSection' component */}
      <FormSection />
    </div>
  );
}

// Export the 'Main' component as the default export
export default Main;
