import './App.css';
import React from 'react';
import Card from './components/Card';

// User profile data
const user = {
  name: 'John Doe',
  bio: 'Software Engineer | Tech Enthusiast',
  website: 'https://google.com',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/Kassimmm' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kassim-tawfick/' }
  ]
};


function App() {
  return (
    <div className="App">
      <Card user={user} />
    </div>
  );
}

export default App;
