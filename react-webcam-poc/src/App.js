import logo from './logo.svg';
import './App.css';
import WebcamCapture from './WebcamComponents/WebcamCapture';
import WebcamStream from './WebcamComponents/WebcamStream';

function App() {
  return (
    <div className="App">
    <WebcamStream></WebcamStream>
    <WebcamCapture></WebcamCapture>
    </div>
  );
}

export default App;
