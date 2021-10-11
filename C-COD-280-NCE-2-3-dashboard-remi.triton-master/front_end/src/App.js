import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './home/Navbar.js';

function App  ()  {
    return (
      <Router>
      <div className="main" >
        <div>
            <Navbar/>
        </div>
      </div>
    </Router>
    );
  }


export default App;
