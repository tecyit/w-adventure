import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveContainer from '../components/responsiveContainer/ResponsiveContainer';
import Routes from '../components/routes';

function App() {
  return (
    <Router>
      <ResponsiveContainer>
        <Routes />
        <h2>Footer</h2>
      </ResponsiveContainer>
    </Router>
  );
}

export default App;
