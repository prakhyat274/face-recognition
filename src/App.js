import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank';
import InputSection from './components/InputSection/InputSection';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <InputSection/>
      {/*<ImgRecognition/> */}
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
