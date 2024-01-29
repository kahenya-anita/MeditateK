import { useState } from 'react';
import './App.module.css';
import Home from './components/Home';
import Background from './components/Background';

function App() {
  const [currentImage, setCurrentImage] = useState('images/rainforest.png'); // Example initial image

  return (
    <>
      <Background currentImage={currentImage} />
      <Home setCurrentImage={setCurrentImage} />
    </>
  )
}

export default App;
