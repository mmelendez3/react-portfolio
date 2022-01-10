import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const [sections] = useState([
    {name: 'About Me'},
    {name: 'Portfolio'},
    {name: 'Contact'},
    {name: 'Resume'}
  ])

  const [currentSection, setCurrentSection] = useState(sections[0])

  return (
    <div>
      <Nav 
      sections = {sections}
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
      ></Nav>
      <main>
        <Header
        currentSection={currentSection}
        ></Header>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;
