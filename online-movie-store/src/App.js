import "./App.css";
import Grid from "./Components/Grid/Grid";
import Header from "./Components/Header/Header";
import Movie from "./Components/Movie/Movie";
import { useState } from "react";

function App() {
  const search = "icarly";
  const [data, setData] = useState("NO RESULTS");

  const getData = (value) => {
    const data = fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=cbd7bbe5d5537db7dafc36b42bb48fb1&language=en-US&query=${value}&page=1&include_adult=false`
    );

    data
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        console.log(data.results);
      })
      .catch(() => console.log("NO RESULTS"));
  };

  return (
    <div className="App">
      <Header getData={getData}></Header>
      <Grid>
        <Movie data={data}></Movie>
      </Grid>
    </div>
  );
}

export default App;
