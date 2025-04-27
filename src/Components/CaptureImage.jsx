import React, { useRef, useState } from 'react';

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [facingMode, setFacingMode] = useState("user"); // user = front, environment = back

  const startCamera = async () => {
    if (stream) return;

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
        audio: false
      });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Could not access camera');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const toggleCamera = () => {
    stopCamera();
    setFacingMode(prev => (prev === "user" ? "environment" : "user"));
    setTimeout(() => startCamera(), 300); // Give time to release
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    const imageData = canvas.toDataURL('image/png');
    setPhotos(prev => [imageData, ...prev]);
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={startCamera}>Click Image</button>
      <button onClick={toggleCamera} style={{ marginLeft: 10 }}>
        Flip Camera
      </button>
      <button onClick={stopCamera} style={{ marginLeft: 10 }}>
        Stop Camera
      </button>

      <div style={{ marginTop: 20 }}>
        <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: 600 }} />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        {stream && (
          <div style={{ marginTop: 10 }}>
            <button onClick={capturePhoto}>Capture Photo</button>
          </div>
        )}
      </div>

      {photos.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>Captured Photos:</h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {photos.map((src, index) => (
              <img key={index} src={src} alt={`capture-${index}`} style={{ width: 100, borderRadius: 8 }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
