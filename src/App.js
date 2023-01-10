import Navbar from './components/navbar/Navbar';  
import Hero from './components/hero/Hero';
import Tracks from './components/tracks/Tracks';
import Subjects from './components/subjects/Subjects';
import Posts from './components/posts/Posts';
import Footer from './components/footer/Footer';

import React from 'react'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Tracks />
      <Subjects/>
      <Posts/>
      <Footer/>
    </div>
  )
}


export default App;
