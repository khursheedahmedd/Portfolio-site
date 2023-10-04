import React, { useState } from 'react';
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  const styles = {
    backgroundColor: '#E4E3E3C7',
    minHeight: '100vh',
  };

  const [activeTab, setActiveTab] = useState('home');

  // Callback function to change the active tab
  const changeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const tColor = 'purple';
  const fonts = 'arial-bold';
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div style={{ styles, }}>
        <Navbar changeActiveTab={changeActiveTab} />
        <main>
          {/* Render the active tab content */}
          {activeTab === 'home' && <Home themeColor={tColor} font={fonts} />}
          {activeTab === 'resume' && <Resume themeColor={tColor} font={fonts} />}
          {activeTab === 'skills' && <Skills themeColor={tColor} font={fonts} />}
          {activeTab === 'projects' && <Projects themeColor={tColor} font={fonts} />}
          {activeTab === 'blogs' && <Blogs themeColor={tColor} font={fonts} />}
          {activeTab === 'faq' && <FAQ themeColor={tColor} font={fonts} />}
          {activeTab === 'contact' && <Contact themeColor={tColor} font={fonts} />}
        </main>
      </div>
    </>
  );
}

export default App;
