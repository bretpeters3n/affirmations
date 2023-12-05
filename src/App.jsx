import { useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom'
import '@splidejs/react-splide/css';
import darkModeIcon from './assets/dark-mode-icon_dark.svg'
import lightModeIcon from './assets/dark-mode-icon_light.svg'
import DisplayAffirmations from './components/DisplayAffirmations'
import CurrentAffirmations from './components/CurrentAffirmations'
import AddAffirmation from './components/AddAffirmation';
import EditAffirmation from './components/EditAffirmation';
import AboutAffirmations from './components/AboutAffirmations';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false)
  const [isDarkModeActive, setIsDarkModeActive] = useState(false)

  const handleHamClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  }

  const toggleModes = () => {
    const themedElements = document.getElementsByClassName("theme-switcher");
    for (let i = 0; i < themedElements.length; i++) {
      themedElements[i].classList.toggle("dark-theme");
    }

    if(isDarkModeActive === true) {
      setIsDarkModeActive(false)
      console.log('dark')
      // toggleFullScreen();
    } else if(isDarkModeActive === false) {
      setIsDarkModeActive(true)
      console.log('light')
      // toggleFullScreen();
    }
  }

  // function toggleFullScreen() {
  //   if (!document.fullscreenElement) {
  //     document.documentElement.requestFullscreen();
  //   } else if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   }
  // }

  document.body.classList.add("theme-switcher");

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main className="">
          <Routes>
            {/* <Route path="/home" element={<HomeTest />} /> */}
            <Route path="/" element={<DisplayAffirmations />} />
            <Route path="/current" element={<CurrentAffirmations />} />
            <Route path="/add" element={<AddAffirmation />} />
            <Route path="/edit" element={<EditAffirmation />} />
            <Route path="/about" element={<AboutAffirmations />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>
        <nav className="theme-switcher btm-gradient">
          <div id="appName" className="theme-switcher" onClick={handleHamClick}>Affirmations</div>
          <button id="hamburger" className={isActive ? 'opened' : ''} onClick={handleHamClick} aria-label="Main Menu">
            <svg width="40" height="40" viewBox="0 0 100 100">
              {/* NEW */}
              <path className="theme-switcher line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className="theme-switcher line line2" d="M 20,50 H 80" />
              <path className="theme-switcher line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </button>
          <ul id="menu" className={isActive ? 'opened' : ''} >
            <li>
              <Link to="/" onClick={handleHamClick} className="theme-switcher">Home</Link>
            </li>
            <li>
              <Link to="/current" onClick={handleHamClick} className="theme-switcher">Edit/Add</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleHamClick}>Why?</Link>
            </li>
            {/* <li>
              <Link id="toggleFullscreen">Toggle fullscreen</Link>
            </li> */}
            <li>
              <img className="theme-switcher" onClick={() => toggleModes()} src={isDarkModeActive ? lightModeIcon : darkModeIcon} alt="dark/light mode icon" />
            </li>
            <li className="lastMenuItemExtend"></li>
          </ul>
        </nav>
      </BrowserRouter>
    </>
  );
}

export default App;
