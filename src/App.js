import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout'
/* Importing pages */
import { Home } from './pages/home/home';
import { JoinGame } from './pages/join-game/join-game';
import { ActiveGame } from './pages/active-game/active-game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/join-game" element={<JoinGame />} />
          <Route path="/active-game" element={<ActiveGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App