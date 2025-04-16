import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import IntroSection from './IntroSection'; 
import AboutMe from './AboutMe';
import Services from './Services';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';

function App() {
  return (
    <div>
    
    
        <Navbar />
        <IntroSection />
        <AboutMe/>
        <Services/>
       <Projects/> 
      <Contacts/> 
      <Footer/>
      </div>
      
     
      
      
  );
}

export default App;
