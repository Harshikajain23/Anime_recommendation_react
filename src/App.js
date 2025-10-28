import { useState } from "react";
import "./App.css";
import data from "./data";
import Anime from "./components/Anime";

const App = () => {
  const [anime, setAnime] = useState(data);

  function removeAnime(id) {
    const newAnime = anime.filter((item) => item.id !== id);
    setAnime(newAnime);
  }

  if (anime.length === 0) {
    return (
      <div className="refresh">
        <h2>No Anime Left</h2>
        <button className="btn-white" onClick={() => setAnime(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <Anime anime={anime} removeAnime={removeAnime} />
    </div>
  );
};

export default App;