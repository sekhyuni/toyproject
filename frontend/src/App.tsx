import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Join from './pages/join/Join';
import Login from './pages/login/Login';
import Search from './pages/search/index';
import Community from './pages/community/Community';
import NotFound from './pages/notfound/Notfound';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    layoutName?: string;
    contentType?: string;
    type?: string;
    orderIsActive?: any;
  }
}

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [keyword, setKeyword] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} keyword={keyword} setKeyword={setKeyword} />} />
        <Route path="/join" element={<Join setKeyword={setKeyword} />} />
        <Route path="/login" element={<Login setIsAuthorized={setIsAuthorized} keyword={keyword} setKeyword={setKeyword} />} />
        <Route path="/search/*" element={<Search isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} keyword={keyword} setKeyword={setKeyword} />} />
        <Route path="/community" element={<Community />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;