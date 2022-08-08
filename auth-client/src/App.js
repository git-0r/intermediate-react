import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { LoggedInRoutes } from './routes/LoggedInRoutes';

function App() {

  return (
    <Routes >
      <Route element={<LoggedInRoutes />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
