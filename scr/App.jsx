// Import React and necessary components from 'react-router-dom'
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your custom page components
import Main from './pages/Main';
import Cat from './pages/Category';
import Info from './pages/info';
import Movies from './pages/Entertainment';

function App() {
  return (
    // Wrap your routes in a React fragment (<> ... </>) to avoid unnecessary parent elements
    <>
      {/* Define your routes using the <Routes> component */}
      <Routes>
        {/* Define a route for the root URL ('/') that renders the Main component */}
        <Route path='/' element={<Main />} />

        {/* Define a route for '/categories' that renders the Cat component */}
        <Route path="/categories" element={<Cat />} />

        {/* Define a route for '/info' that renders the Info component */}
        <Route path='/info' element={<Info />} />

        {/* Define a route for '/entertainment' that renders the Movies component */}
        <Route path="/entertainment" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
