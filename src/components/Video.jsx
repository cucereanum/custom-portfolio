import React from 'react';

import backgroundVideo from "../files/video.mp4";

const videoStyles = {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  objectFit: 'cover',
}

function Video() {
    return (
        <div>
             <video style={videoStyles} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
        </div>
    )
}

export default Video
