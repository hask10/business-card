import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import all of Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
