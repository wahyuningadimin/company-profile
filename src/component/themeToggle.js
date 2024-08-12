import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeActions';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Switch to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;