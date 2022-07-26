import styles from "./Movie.module.css";
import Button from "../UI/Button";
import InfoIcon from "../UI/InfoIcon";
import MovieOverlay from "../UI/MovieOverlay";

const Movie = (props) => {
  let bg = `https://image.tmdb.org/t/p/w500${props.bg}`;

  return (
    <div className={styles.movie} style={{ backgroundImage: `url(${bg})` }}>
      <MovieOverlay className={styles.overlay}>
        <h3 className={styles.header}>
          {props.title === undefined ? props.original : props.title}
        </h3>
        <Button className={styles.button}>Add</Button>
        <InfoIcon className={styles.info}></InfoIcon>
      </MovieOverlay>
    </div>
  );
};

export default Movie;
