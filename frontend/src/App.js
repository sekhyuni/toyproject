import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Search from './pages/search/index';
import Account from './pages/account/Account';
import Login from './pages/login/Login';
import NotFound from './pages/notfound/Notfound';

const App = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main keyword={keyword} setKeyword={setKeyword} />} />
        <Route path="/search/*" element={<Search keyword={keyword} setKeyword={setKeyword} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;