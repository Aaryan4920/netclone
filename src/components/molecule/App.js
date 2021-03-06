import React from "react";
import "../../styles/App.css";
import Row from "./Row";
import requests from "../../constants/request";
import "../../styles/Row.css";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals "
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row
        title="NetFlix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row
        className="row_style"
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        className="row_style"
        title="Documantaries Movies"
        fetchUrl={requests.fetchDocumantaries}
      />
    </div>
  );
}

export default App;
