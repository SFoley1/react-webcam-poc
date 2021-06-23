import React, { useRef, useCallback} from 'react'
import Webcam from 'react-webcam'

const WebcamCapture = () => {
    const [deviceId, setDeviceId] = React.useState({});
    const [devices, setDevices] = React.useState([]);
  


    const handleDevices = React.useCallback(
      mediaDevices =>
        setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
      [setDevices]
    );
  
    React.useEffect(
      () => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
      },
      [handleDevices]
    );
    
    let cameras =  devices.map((device, key)=>
      <option value={device.deviceId} key={device.label} >{device.label}</option> 
    )

    let handleChange =(e) => {
      setDeviceId(e.target.value)
    }
  
    return (
      <>
      <Webcam audio={false} videoConstraints={deviceId}></Webcam>
      <select name="cameras" onChange={this.handleChange}>
          {cameras}
      </select>
      </>
    );
  };
  
  
  export default WebcamCapture

