import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GlobalStyle from './styles/Global';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Friends from './pages/Friends';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Friends" element={<Friends />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;