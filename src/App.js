import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import IntroSection from './IntroSection'; // Import the IntroSection component

function App() {
  return (
    <div className="min-h-screen flex flex-col lg:block">
      {/* Top half - gradient background */}
      <div className="h-1/2-screen-mobile lg:h-screen bg-gradient-to-t from-indigo-200 overflow-hidden">
        <Navbar />
        <IntroSection />
      </div>
      
      {/* Bottom half - white background */}
      <div className="h-1/2-screen-mobile  bg-white"></div>
    </div>
  );
}

export default App;
