// import React from 'react';
//components
import Info from './components/Info';
import Section from './components/Section';
import SocialIcons from './components/SocialIcons';
function App() {

  return (
    <div className='card'>
      <Info />
      <Section title="About" content='I am a freelance full-stack web app developer at fiverr with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.' />
      <Section title="Interests" content='Foodie. Cricket. Reader. Internet fanatic. Entrepreneur. Travel geek. Biker.' />
      <SocialIcons />
    </div>
  )
}

export default App
