import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img className={styles.col} src={imagenUrl} alt={movie.title} />
      <div className={styles.col}>
        <p>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
