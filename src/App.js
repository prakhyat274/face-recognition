import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank';
import InputSection from './components/InputSection/InputSection';
import ImgRecognition from './components/ImgRecognition/ImgRecognition';
import ParticlesBg from 'particles-bg'
import { useState } from 'react';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

function App() {

  const[input,setInput] = useState('')
  const[imageURL,setImageURL] = useState('')
  const[box, setBox] = useState([])
  const[route,setRoute] = useState('signin')

  const changeRoute = (route) =>{
    setRoute(route)
  }
  const handleArray = (arr) =>{
    const img = document.getElementById('inputimage')
    const imgWidth = Number(img.width)
    const imgHeight = Number(img.height)
    const boundingBoxArray = arr.map(obj=>{
      return {
        top: obj.region_info.bounding_box.top_row * imgHeight,
        bottom: imgHeight - (obj.region_info.bounding_box.bottom_row * imgHeight),
        left: obj.region_info.bounding_box.left_col * imgWidth,
        right: imgWidth - (obj.region_info.bounding_box.right_col * imgWidth)
      }}
    )
    handleValues(boundingBoxArray)
  }

  const handleValues = async(data) =>{
    setBox(data)
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
        .then(result => handleArray(result.outputs[0].data.regions))
        .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <Navigation changeRoute={changeRoute}/>
      {
        route === "home"
        ?<div>
          <Logo/>
          <Rank/>
          <InputSection onInputChange={onInputChange} onButtonClick={onButtonClick}/>
          <ImgRecognition box={box}imageURL={imageURL}/>
        </div>
        :(
          route === "signin"
          ?<Signin changeRoute={changeRoute}/>
          :<Register changeRoute={changeRoute}/>
        )
      }
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
