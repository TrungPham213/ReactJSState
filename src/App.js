import './App.css';
import background from './background.jpg'
import Glasses from './glasses';
function App() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      position: 'relative',
    }}>
      <Glasses />
    </div>

  );
}

export default App;
