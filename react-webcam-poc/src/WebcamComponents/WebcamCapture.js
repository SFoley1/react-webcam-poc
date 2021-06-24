import React, { useRef, useCallback} from 'react'
import Webcam from 'react-webcam'

const WebcamCapture = () => {
    const [deviceId, setDeviceId] = React.useState({});


    // const mediaRecorderRef = React.useRef(null);
    // const [capturing, setCapturing] = React.useState(false);
    // const [recordedChunks, setRecordedChunks] = React.useState([]);
    const [options, setOptions] = React.useState([]);
  
    // const handleStartCaptureClick = React.useCallback(() => {
    //   setCapturing(true);
    //   mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
    //     mimeType: "video/webm"
    //   });
    //   mediaRecorderRef.current.addEventListener(
    //     "dataavailable",
    //     handleDataAvailable
    //   );
    //   mediaRecorderRef.current.start();
    // }, [webcamRef, setCapturing, mediaRecorderRef]);
  
    // const handleDataAvailable = React.useCallback(
    //   ({ data }) => {
    //     if (data.size > 0) {
    //       setRecordedChunks((prev) => prev.concat(data));
    //     }
    //   },
    //   [setRecordedChunks]
    // );
  
    // const handleStopCaptureClick = React.useCallback(() => {
    //   mediaRecorderRef.current.stop();
    //   setCapturing(false);
    // }, [mediaRecorderRef, webcamRef, setCapturing]);
  
    // const handleDownload = React.useCallback(() => {
    //   if (recordedChunks.length) {
    //     const blob = new Blob(recordedChunks, {
    //       type: "video/webm"
    //     });
    //     const url = URL.createObjectURL(blob);
    //     const a = document.createElement("a");
    //     document.body.appendChild(a);
    //     a.style = "display: none";
    //     a.href = url;
    //     a.download = "react-webcam-stream-capture.webm";
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //     setRecordedChunks([]);
    //   }
    // }, [recordedChunks]);

    let arr = [{deviceId : 'ki0KP3IPrOIJdk5tS7aJ47xioSA55sYwUf7UVJT5j6U=' , label : 'asdf'}];
    
    const handleDevices = React.useCallback( async() => {
      const mediaDevices = await navigator.mediaDevices.enumerateDevices();
      console.log(mediaDevices)
      const filteredMediaDevices = mediaDevices.filter(({ kind }) => kind === "videoinput" )
      console.log(filteredMediaDevices)

      if(filteredMediaDevices){
        setOptions(filteredMediaDevices)
      }
      }
      ,
      []
    );

    
    React.useEffect(
      () => handleDevices()     
      ,
      [handleDevices]
    );

    const handleChange = React.useCallback( (e) => {
      setDeviceId(e.target.value)
    })

    


 

    return (
      <>
      <Webcam audio={false} videoConstraints={deviceId} ></Webcam>
      {options && (
        <select name="cameras" onChange={(e) => this.handleChange}>  
        { options.map((device) => (<option value={device.deviceId} key={device.label} >{device.label || device.groupId}</option> ) )}
      </select>)}


      {/* {capturing ? (
          <button onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button onClick={handleStartCaptureClick}>Start Capture</button>
        )}
        {recordedChunks.length > 0 && (
          <button onClick={handleDownload}>Download</button>
        )} */}
      </>
    );
  };
  
  
  export default WebcamCapture

