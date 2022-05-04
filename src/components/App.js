import video from "../data/video.js";

import Information from './Information'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Information video={video}/>
    </div>
  );
}

export default App;
