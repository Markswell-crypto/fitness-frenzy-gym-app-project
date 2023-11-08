import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import ReviewPage from './ReviewPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <ReviewPage />
      </Router>
  </React.StrictMode>,
)