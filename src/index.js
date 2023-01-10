import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hero from './components/hero/Hero';
import Tracks from './components/tracks/Tracks';
import Subjects from './components/subjects/Subjects';
import Footer from './components/footer/Footer';

export {Hero, Footer, Tracks, Subjects}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

