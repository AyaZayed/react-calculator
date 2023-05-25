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
          <div>
            <label htmlFor='blue'>1</label>
            <input type='radio' id='blue' name='theme' value='blue' checked={theme === 'blue'} onChange={(e) => { toggleTheme(e) }} />
            <label htmlFor='yellow'>2</label>
            <input type='radio' id='yellow' name='theme' value='yellow' checked={theme === 'yellow'} onChange={toggleTheme} />
            <label htmlFor='violet'>3</label>
            <input type='radio' id='violet' name='theme' value='violet' checked={theme === 'violet'} onChange={toggleTheme} />
          </div>
        </div>
      </div>
      <Calculator />
    </div>
  )
}
