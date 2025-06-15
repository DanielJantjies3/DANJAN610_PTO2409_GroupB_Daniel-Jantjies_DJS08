import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Start MirageJS server in development
if (import.meta.env.MODE === 'development') {
  import('./mocks/server').then(({ default: startMockServer }) => {
    startMockServer();
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

