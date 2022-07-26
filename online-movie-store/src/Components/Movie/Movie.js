import styles from "./Movie.module.css";
import Button from "../UI/Button";
import InfoIcon from "../UI/InfoIcon";
import MovieOverlay from "../UI/MovieOverlay";

const Movie = (props) => {
  return (
    <div className={styles.movie}>
      <MovieOverlay className={styles.overlay}>
        <h3>{props.name}</h3>
        <Button className={styles.button}>Add</Button>
        <InfoIcon className={styles.info}></InfoIcon>
      </MovieOverlay>
    </div>
  );
};

export default Movie;
