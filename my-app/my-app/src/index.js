import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter

// Load external script dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

// Init app after loading API
async function init() {
  try {
    await loadScript('https://cdn.jsdelivr.net/gh/courseraap/capstone@main/api.js');

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <BrowserRouter> {/* ✅ Wrap your app in BrowserRouter */}
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
  } catch (error) {
    console.error(error);
    document.getElementById('root').textContent =
      'Failed to load API script. Please try again later.';
  }
}

init();

reportWebVitals();
