
import { useRef } from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import About from './containers/about/About';
import Products from './containers/products/Products';
import Section from './containers/section/Section';

import WatchCanvas from './components/canvas/Watch'
import Watch from './components/canvas/Watch';

import { BrowserRouter } from 'react-router-dom';
import View from './containers/view-section/View'
import ViewSection from './containers/view-section/ViewSection';

const App = () => {

  const watchCanvasRef = useRef();

  const handlePreview = () => {
    if (watchCanvasRef.current) {
      watchCanvasRef.current.triggerPreview();
    }
  };
  return (
    <BrowserRouter>
      <Navbar/>
      <Watch />
      <Header/>
      <About/>
      <Section triggerPreview={handlePreview}/>
      <Products/>
      <ViewSection/>
    </BrowserRouter>
  );
}

export default App;
