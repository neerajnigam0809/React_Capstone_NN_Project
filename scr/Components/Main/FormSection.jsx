// Import React, useState, and the CSS file for the 'FormSection' component
import React, { useState } from 'react';
import './FormSection.css';

// Import 'useNavigate' from 'react-router-dom' for navigation
import { useNavigate } from 'react-router-dom';

// Define the 'FormSection' functional component
const FormSection = () => {
  // Get the 'navigate' function for programmatic navigation
  const navigate = useNavigate();

  // Define state variables for form input values and errors
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
  });

  // Function to validate the form
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!mobile || isNaN(mobile) || mobile.length !== 10) {
      newErrors.mobile = 'Invalid mobile number';
      isValid = false;
    }

    if (!saveDetails) {
      newErrors.checked = 'Please check the checkbox';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Function to handle the form submission
  const handleSave = () => {
    if (validateForm()) {
      const userDetails = {
        name,
        username,
        email,
        mobile,
      };

      // Store user details in local storage
      localStorage.setItem('userDetails', JSON.stringify(userDetails));

      // Navigate to the '/categories' route
      navigate('/categories');
    }
  };

  return (
    <div className="body">
      <p className="super">Super app</p>
      <p>Create your new account</p>
      <form>
        {/* Input fields for name, username, email, mobile */}
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <span className="error">{errors.name}</span>}
        <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
        {errors.username && <span className="error">{errors.username}</span>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span className="error">{errors.email}</span>}
        <input type="tel" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        {errors.mobile && <span className="error">{errors.mobile}</span>}

        {/* Checkbox for sharing registration data */}
        <label>
          <input type="checkbox" className="checkbox"checked={saveDetails} onChange={() => setSaveDetails(!saveDetails)} />
           Share my registration data with Superapp
        </label>
        {errors.checked && <span className="Cerror">{errors.checked}</span>}
        <br></br>

        {/* Button to submit the form */}
        <button type="button" onClick={handleSave}>SIGN UP</button>
      </form>

      {/* Footer section with terms and privacy policy links */}
      <footer className="footer">
        <p>
          By clicking on Sign up, you agree to Superapp
          <span style={{ color: "green" }}> Terms and Conditions of Use</span>
          </p>
        <p>
          To learn more about how Superapp collects, uses, shares, and protects your personal data, please read Superapp
          <span style={{ color: "green" }}> Privacy Policy</span>
          </p>
      </footer>
    </div>
  );
}

// Export the 'FormSection' component as the default export
export default FormSection;
