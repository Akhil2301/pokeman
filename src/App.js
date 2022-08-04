import React, { useState, useEffect } from "react";
import PokiemonList from "./PokiemonList";
import Pagination from "./Pagination";
import axios from "axios";
function App() {
  const [pokeimon, setPokiemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    axios.get(currentPageUrl).then((res) => {
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokiemon(res.data.results.map((p) => p.name));
    });
  }, [currentPageUrl]);

  function gotoNextPAge() {
    setCurrentPageUrl(nextPageUrl);
  }
  function gotoPrevPAge() {
    setCurrentPageUrl(prevPageUrl);
  }
  return (
    <>
      <PokiemonList pokeimon={pokeimon} />
      <Pagination
       gotoNextPage={nextPageUrl? gotoNextPAge:null} 
       gotoPrevPage={prevPageUrl? gotoPrevPAge:null} />
    </>
  )
}

export default App;
