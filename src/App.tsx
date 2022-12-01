import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GlobalStyle from './styles/Global';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;