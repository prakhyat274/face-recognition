import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank';
import InputSection from './components/InputSection/InputSection';
import ImgRecognition from './components/ImgRecognition/ImgRecognition';
import ParticlesBg from 'particles-bg'
import { useState } from 'react';

function App() {

  const[input,setInput] = useState('')
  const[imageURL,setImageURL] = useState('')
  const[box, setBox] = useState({})

  const handleValues = async(data) =>{
    const img = document.getElementById('inputimage')
    const imgWidth = Number(img.width)
    const imgHeight = Number(img.height)
    setBox({
      top: data.top_row * imgHeight,
      bottom: imgHeight - (data.bottom_row * imgHeight),
      left: data.left_col * imgWidth,
      right: imgWidth - (data.right_col * imgWidth)
    })
  }
  
  const onInputChange = (event) =>{
    setInput(event.target.value)
  }

  const onButtonClick = () =>{

    setImageURL(input)

    const PAT = 'e9a98bb6637e4a929c874d5da261100a';

    const USER_ID = 'catalyst2803';       
    const APP_ID = 'test';

    const MODEL_ID = 'face-detection';   
    const IMAGE_URL = input;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => handleValues(result.outputs[0].data.regions[0].region_info.bounding_box))
        .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <Rank/>
      <InputSection onInputChange={onInputChange} onButtonClick={onButtonClick}/>
      <ImgRecognition box={box}imageURL={imageURL}/>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
