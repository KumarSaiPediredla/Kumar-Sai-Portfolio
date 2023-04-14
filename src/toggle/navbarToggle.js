import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/navbarToggle.css";




const CustomizedSwitches = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);



  return (
    <div>
      <label>
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        Dark mode
      </label>

    </div>
  )
}

export default CustomizedSwitches;