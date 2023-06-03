import React, { useState } from 'react';
import './css/App.css'
import Calculator from './components/Calculator';

export default function App() {
  const [theme, setTheme] = useState('blue');

  function toggleTheme(e) {
    setTheme(e.target.value);
  }

  return (
    <div className="page" data-theme={theme}>
      <div className="top">
        <h1>calc</h1>
        <div className="theme-switch">
          <h6>THEME</h6>
          <div className='options-wrapper'>
            <div className='labels'>
              <label htmlFor="blue">1</label>
              <label htmlFor="yellow">2</label>
              <label htmlFor="violet">3</label>
            </div>
            <div className='options'>
              <button className="blue" value="blue" onClick={toggleTheme}></button>
              <button className="yellow" value="yellow" onClick={toggleTheme}></button>
              <button className="violet" value="violet" onClick={toggleTheme}></button>
            </div>
          </div>
        </div>
      </div>
      <Calculator />
    </div>
  )
}
