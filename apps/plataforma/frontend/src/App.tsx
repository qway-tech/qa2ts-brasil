// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';

// IMPORTANDO AS PÁGINAS
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Progresso from '@/pages/Progresso';
import Prova from '@/pages/Prova';
import Quiz from '@/pages/Quiz';
import Resultado from './pages/Resultado';
import AuthCallback from '@/pages/Login/AuthCallback';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/prova" element={<Prova />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;