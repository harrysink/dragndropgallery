import UserAuthentication from '../components/UserAuthentication';
import UserGallerypage from './UserGalleryPage';
import "../App.css";

function LandingPage() {
  return (
    <div className="App">
      <UserAuthentication/>
      <UserGallerypage/>
    </div>
  );
}

export default LandingPage;