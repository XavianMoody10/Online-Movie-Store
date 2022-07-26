import "./App.css";
import Grid from "./Components/Grid/Grid";
import Header from "./Components/Header/Header";
import Movie from "./Components/Movie/Movie";
import { useState } from "react";

function App() {
  const [newData, setNewData] = useState("");

  const getData = (value) => {
    if (value.length <= 0 || newData === undefined) {
      return;
    } else {
      const data = fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=cbd7bbe5d5537db7dafc36b42bb48fb1&language=en-US&query=${value}&page=1&include_adult=false`
      );

      data
        .then((data) => data.json())
        .then((data) => {
          setNewData(data);
          console.log(newData);
        })
        .catch(() => console.log("NO RESULTS"));
    }
  };

  return (
    <div className="App">
      <Header getData={getData}></Header>
      <Grid>
        {!newData ? (
          <h2>No results</h2>
        ) : (
          newData.results.map((d) => (
            <Movie name={d.name} key={Math.random().toString()}></Movie>
          ))
        )}
      </Grid>
    </div>
  );
}

export default App;
