import React from 'react';
import { Link } from 'react-router-dom';

const ThemeSwitcher = ({themePaths}) => (
    <div className="theme-switcher">
      <button className="light-theme-button"><Link to={themePaths[0]}>Light</Link></button>
      <button className="dark-theme-button"><Link to={themePaths[1]}>Dark</Link></button>
    </div>
);

export default ThemeSwitcher;