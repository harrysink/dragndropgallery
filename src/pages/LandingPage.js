import UserAuthentication from '../components/UserAuthentication';
import UserGallerypage from './UserGalleryPage';
import "../App.css";

function LandingPage() {
  return (
    <div className="App">
      <UserAuthentication/>
      <UserGalleryPage/>
    </div>
  );
}

export default LandingPage;
