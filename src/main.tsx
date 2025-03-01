import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoot from './RootWrap';
import { getCSSPropertyValue } from '@utils/common';

const theme = localStorage.getItem('theme') || 'light';
const color = localStorage.getItem('color') || 'blue';
const newTheme = `${color}-${theme}`;

document.documentElement.setAttribute('data-theme', newTheme);

const themeColor = getCSSPropertyValue('--accent-100');

document
  .querySelector("meta[name='theme-color']")
  .setAttribute('content', themeColor);

console.info(`Organized: version ${import.meta.env.PACKAGE_VERSION}`);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);
