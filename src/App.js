import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserGalleryPage from './pages/UserGalleryPage';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/usergallerypage" element={<UserGalleryPage/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;



