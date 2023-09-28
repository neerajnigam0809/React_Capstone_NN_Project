// Import necessary React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import your CSS styles for the application.
import './index.css';

// Import your main App component.
import App from './App';

// Import the BrowserRouter component from 'react-router-dom' for routing.
import { BrowserRouter } from 'react-router-dom';

// Use ReactDOM.createRoot() to render your application.
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap your application with BrowserRouter for routing functionality.
  <BrowserRouter>
    {/* Enable React Strict Mode for additional development checks. */}
    <React.StrictMode>
      {/* Render your main App component within the BrowserRouter. */}
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
